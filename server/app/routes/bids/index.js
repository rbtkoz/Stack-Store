var Router = require('express').Router();
var User = require('../../../db/models/user.js');
var Campaign = require('../../../db/models/campaign.model.js');
var Bid = require('../../../db/models/bid.js');
var async = require('async');

// Get all of user's bids
Router.get("/user/:user_id", function(req, res, next){
	//console.log(req.params.user_id)
	Bid.find({ "user_id": req.params.user_id}, function(err, bids){
		console.log(bids);
		res.json(bids);
	});
});

//Get all bids from a campaign
Router.get("/campaign/:campaign_id", function(req, res, next){
	Bid.find({campaign_id: req.params.campaign_id})
		.limit(30)
		.exec(function(err, bids){
		res.json(bids);
	})
});

//Get all bids from specific campaign and specific user
Router.get("/campaign/:campaign_id/:user_id", function(req, res, next){
	Bid.find()
		.where('campaign_id', req.params.campaign_id)
		.where('user_id', req.params.user_id)
		.exec(function(err,bids){
			res.json(bids);
		})
});


//Post route will require a complete bid object
Router.post("/", function(req, res, next){

	Bid.create(req.body, function(err, bid){
		if (err) res.send({});

		async.parallel([
		function(done) {
			Campaign.findByIdAndUpdate(bid.campaign_id,
			{$push: {bids: bid._id}},
			{safe: true, upsert: true},
			done(err,campaign))
		},
		function(done){
			User.findByIdAndUpdate(bid.user_id,
			{$push: {bids: bid._id}},
			{safe: true, upsert: true},
			done(err, user))
		}],
		function(err, bid){
			res.json(bid);
		});
	})
})


module.exports = Router
