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
    payed: {
        type: Boolean,
        default: false
    }
});

const Order = mongoose.model('admin', orderSchema);
module.exports = { Order };