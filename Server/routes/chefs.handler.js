const { populate } = require('../models/chef');
const Chef = require('../models/chef');
const Restaurants = require('../models/restaurant');

const getWeeklychef = () => {
    return Chef.findOne({ weekly: true })
        .populate([
            {
                path: 'restaurants', model: Restaurants,
                populate: {
                    path: 'chef', model: Chef,
                    select: 'name'
                }
            }
        ]).exec()
};

const getAllChefs = () => {
    return Chef.find().populate('restaurants')
}

module.exports = { getWeeklychef, getAllChefs };