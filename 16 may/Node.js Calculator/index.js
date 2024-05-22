// index.js

// Import the crypto module
const crypto = require('crypto');

// Get the commands using process.argv
const args = process.argv.slice(2);
const operation = args[0];

// Function to perform addition
const add = (numbers) => numbers.reduce((acc, num) => acc + parseFloat(num), 0);

// Function to perform subtraction
const sub = (numbers) => numbers.reduce((acc, num) => acc - parseFloat(num));

// Function to perform multiplication
const mult = (numbers) => numbers.reduce((acc, num) => acc * parseFloat(num), 1);

// Function to perform division
const divide = (numbers) => numbers.reduce((acc, num) => acc / parseFloat(num));

// Function to generate random number
const random = (length) => {
  return crypto.randomBytes(length).toString('binary');
};

// Function to handle trigonometric operations
const sin = (number) => Math.sin(parseFloat(number));
const cos = (number) => Math.cos(parseFloat(number));
const tan = (number) => Math.tan(parseFloat(number));

// Check the first argument (operation) and perform the appropriate calculation based on the remaining arguments
switch (operation) {
  case 'add':
    if (args.length < 3) {
      console.log("Invalid number of arguments for addition");
    } else {
      console.log(add(args.slice(1)));
    }
    break;

  case 'sub':
    if (args.length < 3) {
      console.log("Invalid number of arguments for subtraction");
    } else {
      console.log(sub(args.slice(1)));
    }
    break;

  case 'mult':
    if (args.length < 3) {
      console.log("Invalid number of arguments for multiplication");
    } else {
      console.log(mult(args.slice(1)));
    }
    break;

  case 'divide':
    if (args.length < 3) {
      console.log("Invalid number of arguments for division");
    } else {
      console.log(divide(args.slice(1)));
    }
    break;

  case 'sin':
    if (args.length !== 2) {
      console.log("Invalid number of arguments for sine");
    } else {
      console.log(sin(args[1]));
    }
    break;

  case 'cos':
    if (args.length !== 2) {
      console.log("Invalid number of arguments for cosine");
    } else {
      console.log(cos(args[1]));
    }
    break;

  case 'tan':
    if (args.length !== 2) {
      console.log("Invalid number of arguments for tangent");
    } else {
      console.log(tan(args[1]));
    }
    break;

  case 'random':
    if (args.length !== 2) {
      console.log("Provide length for random number generation.");
    } else {
      const length = parseInt(args[1]);
      if (isNaN(length) || length <= 0) {
        console.log("Invalid length for random number generation");
      } else {
        console.log(random(length));
      }
    }
    break;

  default:
    console.log("Invalid operation");
}

// Example comments explaining the logic behind each step:
// - Import the crypto module for random number generation.
// - Retrieve command line arguments starting from index 2 (skipping 'node' and 'index.js').
// - Define functions to handle each supported operation (add, sub, mult, divide, sin, cos, tan, random).
// - Use a switch statement to check the operation and call the corresponding function.
// - Validate the number and types of arguments for each operation and handle edge cases appropriately.
