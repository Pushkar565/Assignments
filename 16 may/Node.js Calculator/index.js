// index.js

// Import the crypto module
const crypto = require('crypto');

// Get the command and arguments from process.argv
const [, , operation, ...args] = process.argv;

// Define the calculator function
function calculator(operation, ...args) {
 // Convert arguments to numbers
 const numbers = args.map(Number);

 switch (operation) {
   case 'add':
     return numbers.reduce((sum, num) => sum + num, 0);
   case 'sub':
     return numbers.reduce((diff, num, index) => index === 0 ? num : diff - num);
   case 'mult':
     return numbers.reduce((product, num) => product * num, 1);
   case 'divide':
     return numbers.reduce((quotient, num, index) => index === 0 ? num : quotient / num);
   case 'sin':
     return numbers.map(num => Math.sin(num));
   case 'cos':
     return numbers.map(num => Math.cos(num));
   case 'tan':
     return numbers.map(num => Math.tan(num));
   case 'random':
     const length = args[0] || null;
     if (length === null) {
       console.log('Provide length for random number generation.');
       return;
     }
     const randomBytes = crypto.randomBytes(Math.ceil(length / 8)).toString('binary');
     return randomBytes.slice(0, length);
   default:
     console.log('Invalid operation');
 }
}

// Call the calculator function with the provided arguments
const result = calculator(operation, ...args);
console.log(result);