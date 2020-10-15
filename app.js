const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./util/path");

const errorController = require("./controllers/error");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

// server routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorController.pageNotFound);

app.listen(3000);
