var mongoose = require("mongoose");

mongoose.Promise = require("bluebird");

var mongoDB = "mongodb://Grablack:Gg123456@ds115353.mlab.com:15353/patlatbiseyler";

mongoose.connect(mongoDB,{ useNewUrlParser: true },function(err,error){
    if(err){
        console.log("mongoose hatası:" + err);
    }
    else{
        console.log("mongoose baglandi", mongoDB);
    }
})