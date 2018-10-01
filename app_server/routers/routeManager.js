var routeHome = require("./homeRouter");

var routeKategori = require("./kategoriRouter");

var routeTavsiye = require("./tavsiyeRouter");

var routeEkle = require("./ekleRouter");

module.exports = function(app){
    app.use("/", routeHome);
    app.use("/kategori", routeKategori);
    app.use("/tavsiye", routeTavsiye);
    app.use("/ekle", routeEkle);
}
