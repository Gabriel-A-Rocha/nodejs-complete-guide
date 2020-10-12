const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("/add-product route");
  res.send(
    `<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>`
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);

  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("/ (root) route");
  res.send("<h1>Root route!</h1>");
});

app.listen(3000);
