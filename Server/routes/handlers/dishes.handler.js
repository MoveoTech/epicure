const SignatureDish = require('../../models/signature_dish');

getAllSignatureDishes = () => {
    return SignatureDish.find({ deleted: false }).populate('restaurant', 'name');
}

module.exports = { getAllSignatureDishes }