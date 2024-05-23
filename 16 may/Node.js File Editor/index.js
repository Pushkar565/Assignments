const { error } = require("console");
const fs = require("fs");

// Reading 'test.txt' file
fs.readFile("./test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// Appending content to 'test.txt'
fs.appendFileSync("./test.txt", "Content appended to the file 'test.txt'\n");

// Writing content to 'test1.txt'
fs.writeFileSync("./test1.txt", "File 'test.txt' deleted");

// Writing content to 'test2.txt'
fs.writeFileSync("./test2.txt", "File 'test.txt' renamed to 'new.txt'");

// Reading the current directory
fs.readdir("./", (err, files) => {
  if (err) {
    console.error("Error reading dir:", err);
    return;
  }

  console.log("Files in the current dir:");
  files.forEach((file) => {
    console.log(file);
  });
});
