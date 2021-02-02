const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cartId: {
        type: mongoose.Types.ObjectId,
        ref : 'cart'
    }
});

const User = mongoose.model('admin', userSchema);
module.exports = { User };