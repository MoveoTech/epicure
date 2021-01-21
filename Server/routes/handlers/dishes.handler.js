const SignatureDish = require('../../models/signature_dish');

getAllSignatureDishes = () => {
    return SignatureDish.find().populate('restaurant','name');
}

module.exports = { getAllSignatureDishes }