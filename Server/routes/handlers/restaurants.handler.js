const Restaurant = require('../../models/restaurant');

const getAllRetaurants = () => {
    return Restaurant.find({}, {}, { limit: 3 }).populate('chef', 'name')
};

module.exports = { getAllRetaurants };