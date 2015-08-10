var Router = require('express').Router();
var User = require('../../db/models/user.js');
var Campaign = require('../../db/models/campaign.js');
var Bid = require('../../db/models/bid.js');
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

Router.post("/", function(req, res, next){
	Bid.create(req.body, function(err, bid){
		if (err) return next(err);

	})
})


module.exports = Router
