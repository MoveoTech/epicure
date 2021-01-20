const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signatureDishSchema = new Schema({
    dish_name: {
        type: String,
        required: true
    },
    restaurant: {
        type: mongoose.Types.ObjectId,
        ref : 'restaurant',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dish_price: {
        type: String,
        required: true
    },
    icon: {
        type: String
    }
});

const SignatureDish = mongoose.model('signature_dish', signatureDishSchema);
module.exports = SignatureDish;