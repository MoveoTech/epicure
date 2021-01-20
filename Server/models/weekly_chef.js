const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weeklyChefSchema = new Schema({
    chef: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img_src: {
        type: String,
        required: true
    },
    restaurants: [
        {
            name: { type: String, required: true },
            img_src: { type: String, required: true }
        }
    ]
})