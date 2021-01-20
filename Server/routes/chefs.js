const router = require('express').Router();
const { getWeeklychef } = require('./chefs.handler')
router.get('/weekly', (req, res) => {
    getWeeklychef()
        .then(result => res.send(result))
        .catch(err => res.send(err))
})

module.exports = router