var mongoose = require('mongoose');
var User = require('./user')
var Campaign = require('./campaign')

var bidSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    campaign_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Campaign'},
    bidPrice: {type: Number, get: getPrice, set: setPrice},
    bidTime: {type: Date, default: Date.now }
});

function getPrice(num){
    return num
};

function setPrice(num){
    return num
};

module.exports = mongoose.model('bid', bidSchema);