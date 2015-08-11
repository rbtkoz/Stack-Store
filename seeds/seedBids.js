var mongoose = require('mongoose');
var chalk = require('chalk');
var Promise = require('bluebird');
var connectToDb = require('./../server/db');
var bid = Promise.promisifyAll(mongoose.model('bid'));

var seedBids = function() {
    var bids = [
        {
            user_id: "55c669f40c765fe2471494bf",
            campaign_id: "",
            bidPrice: 5.00,
            bidTime: new Date(2015, 07, 31)
        },
        {
            user_id: "55c669f40c765fe2471494bf",
            campaign_id: "",
            bidPrice: 10.00,
            bidTime: new Date(2015, 07, 24)
        },
        {
            user_id: "55c669f40c765fe2471494bf",
            campaign_id: "",
            bidPrice: 15.00,
            bidTime: new Date(2015, 07, 25)
        },
        {
            user_id: "55c669f40c765fe2471494bf",
            campaign_id: "",
            bidPrice: 20.00,
            bidTime: new Date(2015, 06, 30)
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
