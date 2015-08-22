var mongoose = require('mongoose');
var bidSchema = require('./bid');
var userSchema = require('./user');

var shortenDesc = function(desc) {
	return desc
};

var campaignSchema = new mongoose.Schema({
	title:String,
	imgUrl:[String],
	shortDesc: { type: String, set: shortenDesc },
	longDesc:String,
	duration: Number,
	price: Number,
	desired_price: Number,
	expDate: [Number],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review'}],
	bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bid' }],
	owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }//need to be model name, not schema name
});

module.exports = campaignSchema;
