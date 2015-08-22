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
<<<<<<< HEAD:server/db/models/campaign.model.js
	expDate: [Number],
	bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'bid' }],
	owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }//need to be model name, not schema name
=======
	bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bid' }],
	owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	expDate: [Number]
>>>>>>> 0c7aca23d15043103d3d33fade99166b3514a8b7:server/db/models/campaign.js
});

module.exports = campaignSchema;
