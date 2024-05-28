const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Validation middleware
function validateRequestBody(req, res, next) {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;

  let validationErrors = [];

  if (typeof ID !== 'number') {
    validationErrors.push('ID must be a number.');
  }
  if (typeof Name !== 'string') {
    validationErrors.push('Name must be a string.');
  }
  if (typeof Rating !== 'number') {
    validationErrors.push('Rating must be a number.');
  }
  if (typeof Description !== 'string') {
    validationErrors.push('Description must be a string.');
  }
  if (typeof Genre !== 'string') {
    validationErrors.push('Genre must be a string.');
  }
  if (!Array.isArray(Cast) || !Cast.every(castMember => typeof castMember === 'string')) {
    validationErrors.push('Cast must be an array of strings.');
  }

  if (validationErrors.length > 0) {
    return res.status(400).json({
      message: 'bad request. some data is incorrect.',
      errors: validationErrors
    });
  }

  next();
}

// Route with validation middleware
app.post('/', validateRequestBody, (req, res) => {
  res.status(200).send('data received');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
