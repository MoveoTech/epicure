const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    dish: {
        type: mongoose.Types.ObjectId,
        ref: 'signature_dish'
    },
    quantity: {
        type: Number,
        required: true,
    },
    side_dish: {
        type: String,
        required: true
    },
    payed: {
        type: Boolean,
        default: false
    }
});

const Order = mongoose.model('order', orderSchema);
module.exports = { Order };