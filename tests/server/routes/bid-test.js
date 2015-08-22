// Routes to test:
// POST (/) Create Bid and have that Bid in Campaign and User

// GET(/user/:user_id) expect Array of Bids
// GET(/campaign/:campaign_id) expect Array of Bids
// GET (/campaign/:campaign_id/:user_id) expect Array of Bids

var mongoose = require('mongoose');
var Bid = mongoose.model('Bid');
var Campaign = mongoose.model('Campaign');
var User = mongoose.model('User');

var expect = require('chai').expect;

var dbURI = 'mongodb://localhost:27017/testingDB';
var clearDB = require('mocha-mongoose')(dbURI);

var supertest = require('supertest');
var app = require('../../../server/app');

describe('Hit Bid Route to', function() {
    beforeEach('Establish DB connection', function (done) {
        if (mongoose.connection.db) return done();
        mongoose.connect(dbURI, done);
    });

    afterEach('Clear test database', function (done) {
        clearDB(done);
    });
    describe('Post a new Bid', function(){
        var myBid = {
            user_id: null,
            campaign_id: null,
            bidPrice: 100
        };

        var myCampaign = {
            title: 'test campaign',
            duration: 4,
            price: 5
        };
        var myUser = {
            email: 'test@test.com',
            password: 'test',
        };
        var guestAgent;

        beforeEach('Create guest agent', function () {
            guestAgent = supertest.agent(app);
        });
        beforeEach('Create Campaign', function (done) {
            Campaign.create(myCampaign, done);
        });
        beforeEach('Create User', function(done))

        it('should return status 401', function(done){
            console.log(myBid);
            guestAgent.post('/api/bids', myBid)
                .expect(400, done);
        })


    })


})
