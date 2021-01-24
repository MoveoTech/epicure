const Restaurant = require('../../models/restaurant');

const getAllRetaurants = (limit = 3) => {
    return Restaurant.find({ deleted: false }, {}, { limit: +limit }).populate('chef', 'name')
};

module.exports = { getAllRetaurants };