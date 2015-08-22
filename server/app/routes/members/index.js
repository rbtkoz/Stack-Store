'use strict';
var mongoose = require('mongoose');
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var User = mongoose.model('User');


router.get('/:id', function (req, res) {

    User.findById(req.params.id)
        .populate('campaigns')
        .exec(function(err, user){

            res.send(user);
        });

});
