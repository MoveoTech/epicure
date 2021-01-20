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
        required: true,

    },
    restaurants: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'restaurant'
        }
    ],
    img_src: { type: String }
})

const Chef = mongoose.model('chef', chefSchema);
module.exports = Chef;