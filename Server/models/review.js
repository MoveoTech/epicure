const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    restaurant: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'restaurant'
    },
    rating: {
        type: Number,
        required: true
    }
});

const Review = mongoose.model('review', reviewSchema);
module.exports = { Review };