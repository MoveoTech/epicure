const mongoose = require('mongoose');
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    chef: {
        type: mongoose.Types.ObjectId,
        ref: 'chef',
        required: true
    },
    img_src: {
        type: String
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

const Restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = Restaurant;