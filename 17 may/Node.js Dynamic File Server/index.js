const http = require('http');
const fs = require('fs');
const path = require('path');

const host = 'localhost';
const port = 8000;

const serverRoot = process.cwd(); // Get the current working directory

const server = http.createServer((req, res) => {
  let filePath = path.join(serverRoot, req.url === '/' ? '/index.html' : req.url);

  // Check if the request is for a directory
  if (fs.existsSync(filePath) && fs.lstatSync(filePath).isDirectory()) {
    // Generate HTML directory listing
    fs.readdir(filePath, (err, files) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
        return;
      }

      let output = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Directory Listing</title>
            <style>
              ul { list-style-type: none; padding: 0; }
              li { font-family: monospace; }
              .dir::before { content: '📂 '; }
              .file::before { content: '📄 '; }
            </style>
          </head>
          <body>
            <h1>Directory Listing for ${req.url}</h1>
            <ul>
      `;

      files.forEach((file) => {
        const isDirectory = fs.lstatSync(path.join(filePath, file)).isDirectory();
        output += `<li class="${isDirectory ? 'dir' : 'file'}">${file}</li>`;
      });

      output += `
            </ul>
          </body>
        </html>
      `;

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(output);
    });
  } else {
    // Serve file contents
    fs.readFile(filePath, (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain');
          res.end('404 Not Found');
        } else {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Internal Server Error');
        }
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', getContentType(filePath));
        res.end(data);
      }
    });
  }
});

// Helper function to get the MIME type for a file extension
function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.json':
      return 'application/json';
    case '.png':
      return 'image/png';
    case '.jpg':
      return 'image/jpg';
    default:
      return 'application/octet-stream';
  }
}

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});