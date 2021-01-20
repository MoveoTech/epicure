const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique :true,
        dropDups : true
    },
    password: {
        type: String,
        required: true
    },
    deleted : {
        type : Boolean,
        default : false
    }

})


const User = mongoose.model('user', userSchema)

module.exports = User