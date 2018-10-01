var song = require("../models/song");

module.exports.indexGet = function(req, res){

    song.find({kategori: req.params.kategori}, function(err, results){
        
        res.render("tavsiye",{ song: results[Math.floor(Math.random() * results.length)] }); 
    });
    
}