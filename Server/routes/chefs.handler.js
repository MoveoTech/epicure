const { populate } = require('../models/chef');
const Chef = require('../models/chef');
const Restaurants = require('../models/restaurant')

const getWeeklychef = () => {
    return Chef.find({ weekly: true }).populate('restaurants', 'name').exec()
}

module.exports = { getWeeklychef }