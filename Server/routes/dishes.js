const { getAllSignatureDishes } = require('./dishes.handler')

const router = require('express').Router()

router.get('/signature', (req, res) => {
    getAllSignatureDishes()
        .then(result => res.send(result))
        .catch(err => res.send(err))
})

module.exports = router