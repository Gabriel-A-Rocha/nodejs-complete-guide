exports.pageNotFound = (req, res, next) => {
  res.status(404).render("404-page", { pageTitle: "Page Not Found", path: "" });
};
