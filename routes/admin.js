const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

// array storage while we don't set up a database
const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
});

router.post("/add-product", (req, res, next) => {
  products.push({
    title: req.body.title,
  });
  res.redirect("/");
});

exports.router = router;
exports.products = products;
