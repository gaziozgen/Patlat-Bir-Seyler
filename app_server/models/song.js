var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var songSchema = new Schema({
    aLink: String,
    gLink: String,
    kategori: Array,
    loadDate: Date,
    ip: String,
    like: Number,
    dislike: Number,
    errorCallback: Number
});

var song = mongoose.model("song", songSchema);

module.exports = song;