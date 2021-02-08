const Restaurant = require('../../models/restaurant');

const getAllRetaurants = (limit = 3, skip = 0, popularity = false) => {
    if (popularity) {
        return Restaurant.find({ deleted: false }, {}, { limit: +limit, skip: +skip }).populate('chef', 'name').where('popularity').gt(+popularity);
    }
    return Restaurant.find({ deleted: false }, {}, { limit: +limit, skip: +skip }).populate('chef', 'name')
};

const countAllRestaurants = (popularity) => {
    if (popularity) {
        return Restaurant.countDocuments({ deleted: false }, (err, count) => { })
            .where('popularity').gt(+popularity)
    }
    return Restaurant.countDocuments({ deleted: false }, (err, count) => { })
}

const updateRestaurantRating = (_id, rating) => {
    return Restaurant.findOneAndUpdate({ _id }, { popularity: popularity + rating })
}

module.exports = { getAllRetaurants, countAllRestaurants };