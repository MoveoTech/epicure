const Chef = require('../../models/chef');
const Restaurants = require('../../models/restaurant');

const getWeeklychef = () => {
    return Chef.findOne({ weekly: true , deleted : false })
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
    return Chef.find({deleted : false}).populate('restaurants')
}

module.exports = { getWeeklychef, getAllChefs };