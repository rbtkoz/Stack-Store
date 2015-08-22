'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Campaign = mongoose.model('Campaign');
var ObjectId = require('mongoose').Types.ObjectId;
var User = mongoose.model('User');

module.exports = router;

router.get('/',function(req,res, next){
	Campaign.find({}).then(function(campaigns){
		res.json(campaigns);
	})
})

router.get('/:id',function(req,res, next){
	Campaign.findById({_id:req.params.id}).then(function(campaign){
		res.json(campaign);
	})
})


router.post('/new', function(req, res, next){

	req.body.owner_id = ObjectId(req.body.owner_id);

	return Campaign.create(req.body).then(function(campaign){
		//console.log(campaign);
		return User.findByIdAndUpdate(campaign.owner_id, { $push :{ campaigns:  ObjectId(campaign._id) }},{'new':true}, function(err,user){
			if(err) console.log(err);
			console.log(campaign);
            res.json(campaign);
		})
	})



})
