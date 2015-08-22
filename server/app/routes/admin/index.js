'use strict';
var mongoose = require('mongoose');
var router = require('express').Router();
var _ = require('lodash');
var User = mongoose.model('User');


router.post('/searchUser', authenticateAdmin, function (req, res, next) {
    console.log(req.body);
    return User.find({
        name: req.body.name
        }).then(function(user){
           console.log('user',user)
            res.json(user);
        })

});

router.post('/setAdmin', authenticateAdmin, function(req, res,next){
        console.log(req.body, 'set')
    return User.findByIdAndUpdate(req.body.setId, {$set:{isAdmin: true}})
        .then(function(user){
            res.json(user);
        })
});

function authenticateAdmin(req, res, next){
    if (req.body.id){
        User.findById(req.body.id).then(function(user){
            if (user.isAdmin){
                //console.log(user, 'user')
                next();
            }
            else
                next(new Error("not admin error"));
        })
    }else
        next(new Error("not user error"));
}

module.exports = router;
