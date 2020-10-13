const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("/ (root) route");
  res.send("<h1>Root route!</h1>");
});

module.exports = router;
