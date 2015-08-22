var mongoose = require('mongoose');
var bidSchema = require('./bid');
var userSchema = require('./user');

var shortenDesc = function(desc) {
	return desc
}

var campaignSchema = new mongoose.Schema({
	title:String,
	imgUrl:[String],
	shortDesc: { type: String, set: shortenDesc },
	longDesc:String,
	duration: Number,
	price: Number,
	desired_price: Number,
	bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bid' }],
	owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	expDate: [Number] //why is this a number instead of a date?
});

module.exports = campaignSchema;
