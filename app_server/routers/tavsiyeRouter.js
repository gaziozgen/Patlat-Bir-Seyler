var express = require("express");

var router = express.Router();

var ctrlTavsiye = require("../controllers/tavsiyeController");

router.get("/g/:kategori", ctrlTavsiye.indexGet)

module.exports = router;