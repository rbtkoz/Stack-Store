'use strict';
var mongoose = require('mongoose');
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var User = mongoose.model('User');

var ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).end();
    }
};

router.get('/:id', ensureAuthenticated, function (req, res) {

    User.findById(req.params.id, function(err, user){
        res.send(user);
    })

});
