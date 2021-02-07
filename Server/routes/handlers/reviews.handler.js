const { Review } = require('../../models/review')

const getRestaurantReviews = (restaurant) => {
    return Review.find({ restaurant }).populate('restaurant', 'name img_src popularity').populate('user', 'username').exec()
}

const addReview = (user, restaurant, body, rating) => {
    return new Review({ user, restaurant, body, rating }).save()
}

module.exports = { addReview, getRestaurantReviews }