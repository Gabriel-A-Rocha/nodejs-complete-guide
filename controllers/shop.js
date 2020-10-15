const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getProduct = (req, res) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (prod) => {
    res.render("shop/product-detail", {
      product: prod,
      pageTitle: prod.title,
      path: "/products",
    });
  });
};

exports.getIndex = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    path: "/cart",
  });
};

exports.postCart = (req, res) => {
  const prodId = req.body.productId;
  console.log(prodId);
};

exports.getCheckOut = (req, res) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};

exports.getOrders = (req, res) => {
  res.render("shop/orders", {
    pageTitle: "Your Orders",
    path: "/orders",
  });
};
