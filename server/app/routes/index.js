'use strict';
var router = require('express').Router();

router.use('/members', require('./members'));
router.use('/bids', require('./bids'));
router.use('/campaigns', require('./campaigns'));
//route for creating campaign
router.use('/campaign', require('./campaigns'))
//route for uploading image
router.use('/upload', require('./campaigns'))

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});


module.exports = router;
