//
var express = require("express");
var path = require("path");
var app = express();
var ejsLayouts = require("express-ejs-layouts");
var bodyParser = require("body-parser");
var db = require("./app_server/models/db");
var PORT = process.env.PORT || 8000;

// ejs
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/app_server/views"));
app.use(ejsLayouts);

// public dosyaların görünme izni
app.use("/public", express.static(path.join(__dirname, "public")))

// req için okunabilirlik
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//yönlendirici
require("./app_server/routers/routeManager")(app);

app.listen(PORT);