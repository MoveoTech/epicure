const router = require('express').Router();
const { getAllRetaurants } = require('./restaurants.handler')

router.get('/', (req, res) => {
    getAllRetaurants()
        .then(result => res.send(result))
        .catch(err => res.send(err))
})




module.exports = router