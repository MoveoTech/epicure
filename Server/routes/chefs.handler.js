const { populate } = require('../models/chef');
const Chef = require('../models/chef');
const Restaurants = require('../models/restaurant');

const getWeeklychef = () => {
    return Chef.find({ weekly: true }).populate('restaurants').exec()
};

const getAllChefs = () => {
    return Chef.find().populate('restaurants')
}

module.exports = { getWeeklychef, getAllChefs };