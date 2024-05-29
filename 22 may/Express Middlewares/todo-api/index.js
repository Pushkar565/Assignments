const express = require("express");
const app = express();

app.use(express.json());


let log = (req, res, next) => {
if (!req.body.ID &&
    !req.body.Name &&
    !req.body.Rating &&
    !req.body.Description &&
    !req.body.Genre &&
    !req.body.Cast
)
  next(); 
};

app.use("/todos", log, (req, res) => {
  res.send('you have provided valid data');
});

app.listen(8080, () => {
  console.log("server is running at port 8080");
});
