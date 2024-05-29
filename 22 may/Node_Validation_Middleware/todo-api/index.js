const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Custom validation middleware
const validateTodo = (req, res, next) => {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;

  // Validation checks
  if (typeof ID !== 'number') {
    return res.status(400).send("bad request. some data is incorrect. Note: 'ID' must be a number.");
  }
  if (typeof Name !== 'string') {
    return res.status(400).send("bad request. some data is incorrect. Note: 'Name' must be a string.");
  }
  if (typeof Rating !== 'number') {
    return res.status(400).send("bad request. some data is incorrect. Note: 'Rating' must be a number.");
  }
  if (typeof Description !== 'string') {
    return res.status(400).send("bad request. some data is incorrect. Note: 'Description' must be a string.");
  }
  if (typeof Genre !== 'string') {
    return res.status(400).send("bad request. some data is incorrect. Note: 'Genre' must be a string.");
  }
  if (!Array.isArray(Cast) || !Cast.every(item => typeof item === 'string')) {
    return res.status(400).send("bad request. some data is incorrect. Note: 'Cast' must be an array of strings.");
  }

  // If all validations pass
  next();
};

// Route that uses the validation middleware
app.post('/', validateTodo, (req, res) => {
  res.status(200).send('data received');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
