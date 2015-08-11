var mongoose = require('mongoose');
var chalk = require('chalk');
var Promise = require('bluebird');
var connectToDb = require('./../server/db');
var bid = Promise.promisifyAll(mongoose.model('bid'));

var seedBids = function() {
    var bids = [
        {
            user_id: null,
            campaign_id: null,
            bidPrice: 5.00,
            bidTime: null
        },
        {
            user_id: "55c654418f163b1ab580a977",
            campaign_id: null,
            bidPrice: 10.00,
            bidTime: null
        },
        {
            user_id: "55c654418f163b1ab580a977",
            campaign_id: null,
            bidPrice: 15.00,
            bidTime: null
        },
        {
            user_id: "55c654418f163b1ab580a977",
            campaign_id: null,
            bidPrice: 20.00,
            bidTime: null
        }
    ];

    return bid.createAsync(bids);
}

connectToDb.then(function(){
    bid.findAsync({}).then(function(bids) {
        if(bids.length) {
            bid.removeAsync({}).then(function(){
                console.log(chalk.red('bids Deleted!'));
                return seedBids();
            });
        } else {
            return seedBids()
        }
    }).then(function(){
        console.log(chalk.green('Bids Seeded!'));
        process.kill(0);
    });
});
