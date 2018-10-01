var express = require("express");

var router = express.Router();

var ctrlEkle = require("../controllers/ekleController");

router.get("/", ctrlEkle.indexGet)
router.post("/", ctrlEkle.indexPost)

module.exports = router;