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