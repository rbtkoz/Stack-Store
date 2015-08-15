/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./../server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var Campaign = Promise.promisifyAll(mongoose.model('Campaign'));

var seedUsers = function () {

    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'obama@gmail.com',
            password: 'potus'
        }
    ];

    return User.createAsync(users);

};

var seedCampaign = function () {

    var campaign = [
        {
        title:'cute puppy',
        shortDesc: "well trained and cute",
        duration: "5",
        imgUrl: ["https://pbs.twimg.com/profile_images/378800000674268962/06ce58cab26c3a0daf80cf57e5acb29b_400x400.jpeg","http://cdn.sheknows.com/articles/2013/04/corgi_funny__5.jpg"],
        longDesc:"Almost all dogs bark.  Corgis bark a lot.  If you have never lived with dogs that bark a lot, you may want to spend some time in the home of someone with a barking breed to see if you can live with it. It’s true that many Corgis make excellent watchdogs.  As herding and farm dogs, one of their historic jobs was to notice anything “different” and alert the owners.  This means your Corgi is likely to bark if someone walks up your sidewalk or if a stray cat starts digging up your flowerbeds. Your Corgi may also alert you if your neighbor left a gate open, if a car is parked on the opposite side of the street from its usual spot, or if the wind is rattling your gutter.   He may bark to warn you that someone is entering your neighbor’s house--- and oh yes, it IS your neighbor.  He might be best friends with the Labrador up the street, but that won’t stop him from barking to warn you that the Labrador is walking past your house. "
    },

        {
        title:'Gateleg table',
        shortDesc: "well trained and cute",
        duration: "3",
        imgUrl: ["http://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Gateleg-table.jpg/600px-Gateleg-table.jpg"],
        longDesc:"A gateleg table is a type of furniture first introduced in England in the 16th century. The table top has a fixed section and one or two hinged leaves, which, when not in use, fold down below the fixed section to hang vertically. As such, gateleg tables are a subset of the type known as a dropleaf. The hinged section, or flap, was supported on pivoted legs joined at the top and bottom by stretchers constituting a gate. Large flaps had two supports, which had the advantage of providing freer leg space in the centre. The earliest gateleg tables of the 16th and 17th century were typically made of oak."    },

        {
        title:'cute puppy',
        shortDesc: "well trained and cute",
        duration: "1",
        imgUrl: ["https://pbs.twimg.com/profile_images/378800000674268962/06ce58cab26c3a0daf80cf57e5acb29b_400x400.jpeg","http://cdnpix.com/show/imgs/f039ba4e4f2829cd3b3c8a7cc3f5cdf8.jpg","https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s320x320/e15/11356487_1013157495391733_785257482_n.jpg"],
        longDesc:"many Corgis are “talkers” who use a wide range of vocalizations to express any number of opinions or to get your attention.  Corgi vocalizations may include low woofs, whines, grumbles, short howls, and a series of whining grunts that many Corgi owners refer to affectionately as “Wookie” or “Chewbacca” noises."
    }
    ];
    console.log('seed')
    return Campaign.createAsync(campaign);

};


connectToDb.then(function () {

    return seedCampaign();
   /*User.findAsync({}).then(function (users) {

        if (users.length === 0) {
            return seedUsers();
        } else {
            console.log(chalk.magenta('Seems to already be user data, exiting!'));
            process.kill(0);
        }
    }).then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);
    });*/
});
