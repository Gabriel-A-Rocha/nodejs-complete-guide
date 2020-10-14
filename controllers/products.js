const adminData = require("../routes/admin");

// array storage while we don't set up a database
const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Add Product",
    productCSS: true,
    formsCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({
    title: req.body.title,
  });
  console.log(products);
  res.redirect("/");
};

exports.products = products;
