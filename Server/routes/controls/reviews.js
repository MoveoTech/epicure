const router = require('express').Router();
const verifyUser = require('../../admin/authentication/verification.middleware');
const { addReview, getRestaurantReviews } = require('../handlers/reviews.handler');

// get restaurant reviews

router.get('/', verifyUser, (req, res) => {
    const { restaurant } = req.body
    if (!restaurant) {
        res.status(403).json({ error: true, msg: "Missing some info...." })
        return
    }
    getRestaurantReviews(restaurant)
        .then(reviews => res.send(reviews))
        .catch(err => res.send(err))
});


// Add Review 
router.post('/add', verifyUser, (req, res) => {
    const { user, restaurant, body, rating } = req.body
    if (!user || !restaurant || !body || !rating) {
        res.status(403).json({ error: true, msg: "Missing some info...." })
        return
    }
    addReview(user, restaurant, body, rating)
        .then(result => res.send(result))
        .catch(err => res.send(err))
});




module.exports = router;