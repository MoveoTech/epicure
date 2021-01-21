const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chefSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    weekly: {
        type: Boolean,
        default: false

    },
    restaurants: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'restaurant'
        }
    ],
    img_src: { type: String },
    deleted: {
        type: Boolean,
        default: false
    }
})

const Chef = mongoose.model('chef', chefSchema);
module.exports = Chef;