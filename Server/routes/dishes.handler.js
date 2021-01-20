const SignatureDish = require('../models/signature_dish');
const Restaurant = require('../models/restaurant');

getAllSignatureDishes = () => {
    return SignatureDish.find().populate('restaurant','name')
}

module.exports = { getAllSignatureDishes }