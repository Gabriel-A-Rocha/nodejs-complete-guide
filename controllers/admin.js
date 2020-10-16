const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    path: "/admin/add-product",
    pageTitle: "Add Product",
    editing: "false",
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  const { title, imageUrl, description, price } = req.body;

  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.postEditProduct = (req, res) => {
  const { productId, title, imageUrl, description, price } = req.body;

  const updatedProduct = new Product(
    productId,
    title,
    imageUrl,
    description,
    price
  );

  updatedProduct.save();

  res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    if (!product) {
      return res.redirect("/");
    }
    res.render("admin/edit-product", {
      path: "/admin/edit-product",
      pageTitle: "Edit Product",
      editing: editMode,
      product: product,
    });
  });
};

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};
