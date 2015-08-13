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
	duration: Number
	price: Number,
	desired_price: Number,
	bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'bidSchema' }],
	owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'userSchema' }
});

module.exports = mongoose.model('Campaign', campaignSchema);
