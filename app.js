const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("/add-product route");
  res.send("<h1>Product route!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("/ (root) route");
  res.send("<h1>Root route!</h1>");
});

app.listen(3000);
