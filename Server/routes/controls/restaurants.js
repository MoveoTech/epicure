const router = require('express').Router();
const { getAllRetaurants } = require('../handlers/restaurants.handler')

router.get('/', (req, res) => {
    const { limit } = req.query
    getAllRetaurants(limit)
        .then(result => res.send(result))
        .catch(err => res.send(err))
})




module.exports = router