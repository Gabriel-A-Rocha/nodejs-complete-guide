// how to setup basic middlewares using express

const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Middleware 1 activated");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2 activated");
  next();
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
