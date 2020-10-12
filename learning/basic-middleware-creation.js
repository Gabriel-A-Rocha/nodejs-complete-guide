// how to setup basic middlewares using express

const express = require("express");
const app = express();

app.use("/route1", (req, res, next) => {
  console.log("Middleware 1 activated");
  res.send("<h1>Middleware 1 activated</h1>");
});

app.use("/route2", (req, res, next) => {
  console.log("Middleware 2 activated");
  res.send("<h1>Middleware 2 activated</h1>");
});

app.use("/users", (req, res, next) => {
  console.log("Users route");
  res.send("<h1>Users route</h1>");
});
app.use("/", (req, res, next) => {
  console.log("Root route");
  res.send("<h1>Root route</h1>");
});

app.listen(3000);
