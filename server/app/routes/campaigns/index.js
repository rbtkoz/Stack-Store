'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var bids = mongoose.model('Bid');
var Campaign = mongoose.model('Campaign');
var ObjectId = mongoose.Types.ObjectId;
var User = mongoose.model('User');
var fs = require('fs');
var AWS = require('aws-sdk');
AWS.config.region = 'us-west-2';

//var multipart = require('connect-multiparty');
module.exports = router;

//Amazon S3 credentials
//Access Key ID: AKIAJXEZ2RS744RPV6JQ
//Secret Access Key: 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
AWS.config.update({ accessKeyId: 'AKIAJXEZ2RS744RPV6JQ', secretAccessKey: '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' });


router.get('/',function(req,res, next){
    Campaign.find({}).then(function(campaigns){
		res.json(campaigns);
	})
})

router.get('/:id',function(req,res, next){
	Campaign.findById({_id:req.params.id}).populate('bids').then(function(campaign){
		res.json(campaign);
	})
})


router.post('/new', function(req, res, next){
	req.body.owner_id = ObjectId(req.body.owner_id);
    console.log('new campaign req',req.body);
	return Campaign.create(req.body).then(function(campaign){
		//console.log(campaign);
		return User.findByIdAndUpdate(campaign.owner_id, { $push :{ campaigns:  ObjectId(campaign._id) }},{'new':true}, function(err,user){
			if(err) console.log(err);
			console.log(campaign);
            res.json(campaign);
		})
	})
})


router.post('/image',function(req, res, next){

    fs.readFile(req.files.file.path, function (err, data) {
        if (err) { throw err; }
         var filename= req.files.file.name;
        //var base64data = new Buffer(data, 'binary').toString('base64');
        console.log(filename, "filename");

        var s3 = new AWS.S3();
        var params = {Bucket:'stackstore', Key: filename, Body:data, ACL: 'public-read'}
        s3.putObject(params, function(err, file){
            if(err)
                console.log(err);
            else
                res.json(filename);
                console.log("Successfully uploaded");
        })

    });

})
