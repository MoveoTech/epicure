const Restaurant = require('../../models/restaurant');

const getAllRetaurants = (limit = 3, skip = 0) => {
    return Restaurant.find({ deleted: false }, {}, { limit: +limit , skip : +skip }).populate('chef', 'name')
};

module.exports = { getAllRetaurants };