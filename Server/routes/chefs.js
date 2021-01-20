const router = require('express').Router();
const { getWeeklychef, getAllChefs } = require('./chefs.handler');

// Get all chefs

router.get('/', (req, res) => {
    getAllChefs()
        .then(chefs => res.send(chefs))
        .catch(err => res.send(err))
})


//  ------- Get weekly chef 

router.get('/weekly', (req, res) => {
    getWeeklychef()
        .then(result => res.send(result))
        .catch(err => res.send(err))
});

module.exports = router;