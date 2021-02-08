const router = require('express').Router();
const { getAllRetaurants, countAllRestaurants } = require('../handlers/restaurants.handler')

router.get('/', (req, res) => {
    const { limit, skip, popularity } = req.query
    getAllRetaurants(limit, skip, popularity)
        .then(restaurants => {
            countAllRestaurants(popularity)
                .then(count => res.json({ count, restaurants }))
        })
        .catch(err => res.send(err))

});

module.exports = router