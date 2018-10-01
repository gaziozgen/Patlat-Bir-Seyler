module.exports.indexGet = function(req, res){
    res.render("kategori");
}

module.exports.yuklenmeGet = function(req, res){
    res.render("yukleniyor",{ kategori: req.params.kategori });
}