var mongoose = require('mongoose');
var bidSchema = require('./bid');
var userSchema = require('./user');

var setDescrition = function(desc) {
    return desc
}

var getDescription = function(desc) {
    return desc
}

var Schema = new mongoose.Schema({
    name: String,
    description: { type: String, set: setDescrition, get: getDescription },
    image: String,
    duration: Number,
    price: Number,
    desired_price: Number,
    bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'bidSchema' }],
    owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'userSchema' }
});

module.exports = mongoose.model('campaign', Schema);
