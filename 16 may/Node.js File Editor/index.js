const fs = require('fs');
const path = require('path');

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv.slice(4).join(' ');

switch (operation) {
  case 'read':
    if (!file) {
      console.log('Missing file argument');
      break;
    }
    try {
      const data = fs.readFileSync(file, 'utf8');
      console.log(data);
    } catch (err) {
      console.error(`Error reading file '${file}': ${err.message}`);
    }
    break;

  case 'delete':
    if (!file) {
      console.log('Missing file argument');
      break;
    }
    try {
      fs.unlinkSync(file);
      console.log(`File '${file}' deleted`);
    } catch (err) {
      console.error(`Error deleting file '${file}': ${err.message}`);
    }
    break;

  case 'create':
    if (!file) {
      console.log('Missing file argument');
      break;
    }
    try {
      fs.writeFileSync(file, '');
      console.log(`File '${file}' created`);
    } catch (err) {
      console.error(`Error creating file '${file}': ${err.message}`);
    }
    break;

  case 'append':
    if (!file || !content) {
      console.log('Missing file or content argument');
      break;
    }
    try {
      fs.appendFileSync(file, `${content}\n`);
      console.log(`Content appended to the file '${file}'`);
    } catch (err) {
      console.error(`Error appending to file '${file}': ${err.message}`);
    }
    break;

  case 'rename':
    if (!file || !content) {
      console.log('Missing file or new name argument');
      break;
    }
    const newFile = path.join(path.dirname(file), content);
    try {
      fs.renameSync(file, newFile);
      console.log(`File '${file}' renamed to '${newFile}'`);
    } catch (err) {
      console.error(`Error renaming file '${file}' to '${newFile}': ${err.message}`);
    }
    break;

  case 'list':
    if (!file) {
      console.log('Missing directory argument');
      break;
    }
    try {
      const files = fs.readdirSync(file);
      console.log(`Contents of '${file}':`);
      files.forEach(f => console.log(f));
    } catch (err) {
      console.error(`Error listing directory '${file}': ${err.message}`);
    }
    break;

  default:
    console.log(`Invalid operation '${operation}'`);
}