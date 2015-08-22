var Router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Campaign = mongoose.model('Campaign');
var Bid = mongoose.model('Bid');
var _ = require('lodash');
var async = require('async');
var ObjectId = require('mongoose').Types.ObjectId;

// Get all of user's bids
Router.get("/user/:user_id", function(req, res, next){
	//console.log(req.params.user_id)
	Bid.find({user_id: req.params.user_id})
        .populate('campaign_id')
        .exec(function(err, bids){
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
    if (req.body.campaign_id && req.body.user_id){
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
                    }, function(err, user){
                        if(err) {
                            done(err)
                        } else {
                            done(null, _.omit(user,['salt','password']));
                        }
                    });
                }
            }, function(err, response){
                //console.log(response);
                if(err) {
                    res.status(400)
                } else {
                    response.bid = bid;
                    res.status(200).send(response);
                }
            });
        })
    }else{
        res.status(400).send(null);
    }

})


module.exports = Router;
