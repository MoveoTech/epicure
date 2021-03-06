const router = require('express').Router();
const scrapeRestaurant = require('../../../routes/handlers/crawler.handler');
const verifyUser = require('../../authentication/verification.middleware');
const { addRestaurant, editRestaurant, deleteRestaurant } = require('../handlers/restaurant.handler');

// ----- Add Restaurant -------
router.post('/add', verifyUser, (req, res) => {
    const { name, chef, img_src, popularity } = req.body
    if (!name || !chef || !img_src || !popularity) {
        res.json({ error: true, msg: "Missing some info..." }).status(404);
        return;
    }
    scrapeRestaurant(name).then(result => {

        addRestaurant(name, chef, img_src, popularity, result.address, result.activeTime, result.phoneNumber)
            .then(result => res.send(result))
            .catch(err => res.send(err))
    })
});

// ---- Edit Restaurant -------
router.put('/edit', verifyUser, (req, res) => {
    const { _id, name, chef, img_src, popularity } = req.body
    if (!_id || !name || !chef || !img_src) {
        res.json({ error: true, msg: "Missing some info..." }).status(404);
        return;
    }
    scrapeRestaurant(name).then(result => {
        editRestaurant(_id, name, chef, img_src, popularity, result.address, result.activeTime, result.phoneNumber)
            .then(result => res.send(result))
            .catch(err => res.send(err))
    }
    )
});

router.delete('/delete', verifyUser, (req, res) => {
    const { _id } = req.body;
    if (!_id) {
        res.json({ error: true, msg: "missing some info..." }).status(404);
        return;
    }
    deleteRestaurant(_id)
        .then(result => res.send(result))
        .catch(err => res.send(err))
});

module.exports = router;