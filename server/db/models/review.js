var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    campaign_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Campaign'},
    title: String,
    comment: String,
    rating: {type: Number, min: 1, max: 5},
    reviewDate: {type: Date, default: Date.now }
});


module.exports = reviewSchema;
