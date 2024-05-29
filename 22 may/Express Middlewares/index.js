const express = require("express");
const app = express();

app.use(express.json());

let log = (req, res, next) => {
  console.log("this is log middleware");
  next(); // Ensure to call next() to pass control to the next middleware/route handler
};

app.use("/todos", log, (req, res) => {
  res.send('you have provided valid data');
});

app.listen(8080, () => {
  console.log("server is running at port 8080");
});
