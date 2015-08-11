'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var CampaignModel = mongoose.model('Campaign');
module.exports = router;

router.get('/',function(req,res, next){
	CampaignModel.find({}).then(function(campaigns){
		res.json(campaigns);
	})
})

router.get('/:id',function(req,res, next){
	CampaignModel.findById({_id:req.params.id}).then(function(campaign){
		res.json(campaign);
	})
})