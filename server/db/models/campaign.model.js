'use strict';
//var crypto = require('crypto');
var mongoose = require('mongoose');
var campaignSchema = new mongoose.Schema({
	title:String,
	imgUrl:String,
	shortDesc:String,
	longDesc:String,
	duration: Number
});

mongoose.model('Campaign', campaignSchema);