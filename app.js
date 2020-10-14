const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./util/path");

const app = express();

// app.set("view engine", "pug");

app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminData.router);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404-page", { pageTitle: "Page Not Found" });
});

app.listen(3000);
