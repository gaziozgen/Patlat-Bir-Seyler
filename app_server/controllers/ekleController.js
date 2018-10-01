var song = require("../models/song");
var express = require("express");
var app = express();

module.exports.indexGet = function(req, res){
    res.render("ekle");
}

module.exports.indexPost = function(req, res){
    
    
    var gKey = req.body.aLink.substr(req.body.aLink.search("v=") + 2, 11);
    var gLink = "https://www.youtube.com/embed/" + gKey +"?autoplay=1";
    
    // buraya gLink kontrol ekle (eşsizlik + kategori ekleme)

    var kategoriler = ["rastgele"];

    if ( req.body.c1 ? true : false){
        kategoriler.push("enerjik");
    }
    if ( req.body.c2 ? true : false){
        kategoriler.push("dram");
    }
    if ( req.body.c3 ? true : false){
        kategoriler.push("ask");
    }
    if ( req.body.c4 ? true : false){
        kategoriler.push("anarsik");
    }
    if ( req.body.c5 ? true : false){
        kategoriler.push("alternatif");
    }

    var newSong = new song({
        aLink: req.body.aLink,
        gLink: gLink,
        kategori: kategoriler,
        loadDate: new Date(new Date().getTime() + 10800000),
        ip: req.ip, // deneme
        like: 1,
        dislike: 0,
        errorCallback: 0
    });
    
    newSong.save(function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("Şarkı Kaydedildi")
        }
    });
    
    res.render("ekle");
}