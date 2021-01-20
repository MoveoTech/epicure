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

    }
})

const Chef = mongoose.model('chef', chefSchema)