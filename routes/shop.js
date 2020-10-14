const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = productsController.products;
  res.render("shop", {
    prods: products,
    pageTitle: "My Products",
    path: "/",
  });
});

module.exports = router;
