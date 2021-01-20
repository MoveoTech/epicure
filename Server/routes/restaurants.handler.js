const Restaurant = require('../models/restaurant');
const Chef = require('../models/chef');

const getAllRetaurants = () => {
    return Restaurant.find().populate('chef', 'name')
};



module.exports = { getAllRetaurants };