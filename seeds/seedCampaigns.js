var mongoose = require('mongoose');
var chalk = require('chalk');
var Promise = require('bluebird');
var connectToDb = require('./../server/db');
var campaign = Promise.promisifyAll(mongoose.model('campaign'));

var seedCampaigns = function() {
    var campaigns = [
        {
            name: "Handmade Bike",
            description: "I made this awesome bike and it is really cool",
            image: 'http://i.ytimg.com/vi/iUikSPLqKcI/maxresdefault.jpg',
            duration: null,
            price: 100,
            desired_price: 500,
            bids: [],
            owner_id: "55c669f40c765fe2471494bf",
        },
        {
            name: "Handmade Jewlery",
            description: "This is the best Jewlery you can buy",
            image: 'http://www.homemadejewelry.org/wp-content/gallery/jewelry/3278967617_076d794df2.jpg',
            duration: null,
            price: 10,
            desired_price: 5,
            bids: [],
            owner_id: "55c669f40c765fe2471494bf",
        },
        {
            name: "Handmade Watch",
            description: "This homemade watch tells interdimensional time",
            image: 'http://cdn.instructables.com/FUN/5FC0/H1YONL7G/FUN5FC0H1YONL7G.LARGE.jpg',
            duration: null,
            price: 1000,
            desired_price: 5000,
            bids: [],
            owner_id: "55c669f40c765fe2471494bf",
        },
        {
            name: "Handmade Computer",
            description: "I made this computer",
            image: 'http://www.quickpcct.com/wp-content/uploads/2012/05/resized_S1059524.jpg',
            duration: null,
            price: 2000,
            desired_price: 5000,
            bids: [],
            owner_id: "55c669f40c765fe2471494bf",
        }
    ];

    return campaign.createAsync(campaigns);
}

connectToDb.then(function(){
    campaign.findAsync({}).then(function(campaigns) {
        if(campaigns.length) {
            campaign.removeAsync({}).then(function(){
                console.log(chalk.red('Users Deleted!'));
                return seedCampaigns()
            });
        } else {
            return seedCampaigns()
        }
    }).then(function(){
        console.log(chalk.green('Campaigns Seeded!'));
        process.kill(0);
    });
});
