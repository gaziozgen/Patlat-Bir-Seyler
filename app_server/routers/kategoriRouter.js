var express = require("express");

var router = express.Router();

var ctrlKategori = require("../controllers/kategoriController");

router.get("/", ctrlKategori.indexGet)
router.get("/g/:kategori", ctrlKategori.yuklenmeGet)

module.exports = router;