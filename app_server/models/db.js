var mongoose = require("mongoose");

mongoose.Promise = require("bluebird");

var mongoDB = "access_keyyyyy";

mongoose.connect(mongoDB,{ useNewUrlParser: true },function(err,error){
    if(err){
        console.log("mongoose hatası:" + err);
    }
    else{
        console.log("mongoose baglandi", mongoDB);
    }
})