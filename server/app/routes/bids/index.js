var Router = require('express').Router();
var User = require('../../../db/models/user.js');
var Campaign = require('../../../db/models/campaign.model.js');
var Bid = require('../../../db/models/bid.js');
var async = require('async');
var ObjectId = require('mongoose').Types.ObjectId;

// Get all of user's bids
Router.get("user/:user_id", function(req, res, next){
	User.findById(req.query.user_id, function(err, bids){
		console.log(bids);
		res.json(bids);
	});
});

//Get all bids from a campaign
Router.get("campaign/:campaign_id", function(req, res, next){
	Bid.find({campaign_id: req.query.campaign_id})
		.limit(30)
		.exec(function(err, bids){
		res.json(bids);
	})
});

//Get all bids from specific campaign and specific user
Router.get("campaign/:campaign_id/:user_id", function(req, res, next){
	Bid.find()
		.where('campaign_id', req.query.campaign_id)
		.where('user_id', req.query.user_id)
		.exec(function(err,bids){
			res.json(bids);
		})
});


//Post route will require a complete bid object
Router.post("/", function(req, res, next){
	Bid.create(req.body, function(err, bid){
		async.parallel({
			campaign: function(done) {
				Campaign.findByIdAndUpdate(ObjectId(req.body.campaign_id), {
					$push: { bids: bid._id }
				}, {
					safe: true,
					upsert: true
				}, function(err, campaign){
					if(err) {
						done(err)
					} else {
						done(null, campaign)
					}
				});
			},
			user: function(done) {
				User.findByIdAndUpdate(req.body.user_id, {
					$push: { bids: bid._id }
				}, {
					safe: true,
					upsert: true
				}, function(err, bid){
					if(err) {
						done(err)
					} else {
						done(null, bid)
					}
				});
			}
		}, function(err, response){
			if(err) {
				console.log(err)
			} else {
				res.status(200).send(bid);
			}
		});
	})
})


module.exports = Router
