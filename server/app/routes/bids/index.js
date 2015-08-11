var Router = require('express').Router();
var User = require('../../db/models/user.js');
var Campaign = require('../../db/models/campaign.js');
var Bid = require('../../db/models/bid.js');
var async = require('async');
//bids 

Router.get("/", function(req, res, next){
	if (err) return next(err);
	//get all bids
	if (req.query.user_id && !req.query.campaign_id){
		User.find({user_id: req.query.user_id}, function(err, bids){
			res.json(bids);
		}
	}
	if (req.query.campaign_id && !req.query.user_id){
		Bid.find({campaign_id: req.query.campaign_id}, function(err, bids){
			res.json(bids);
		})
	}
	if (req.query.campaign_id && req.query.user_id){
		Bid.find()
			.where('campaign_id', req.query.campaign_id)
			.where('user_id', req.query.user_id)
			.exec(function(err,bids){
				res.json(bids);
			})
	}
});

//Post route will require a complete bid object
Router.post("/", function(req, res, next){
	if (err) return next(err);
	Bid.create(req.body, function(err, bid){
		if (err) res.send({});

		async.parallel([
		function(done) { 
			Campaign.findByIdAndUpdate(bid.campaign_id, 
			{$push: {bids: bid._id}}, 
			{safe: true, upsert: true}, 
			done(err,campaign)
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
