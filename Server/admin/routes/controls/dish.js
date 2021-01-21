const router = require('express').Router();
const { addDish, editDish, deleteDish } = require('../handlers/dish.handler');
const verifyUser = require('../../authentication/verification.middleware');

//  ----- Add Dish -------
router.post('/add', verifyUser, (req, res) => {
    const { dish_name, restaurant, description, dish_price, img_src, icon } = req.body;
    if (!dish_name || !restaurant || !description || !dish_price || !img_src) {
        res.json({ error: true, msg: "missing info..." }).status(404)
        return
    };
    addDish(dish_name, restaurant, description, dish_price, img_src, icon)
        .then(result => res.send(result))
        .catch(err => res.send(err))
});

// ------ Edit Dish -------
router.put('/edit', verifyUser, (req, res) => {
    const { dish_name, restaurant, description, dish_price, img_src, icon, _id } = req.body;
    if (!dish_name || !restaurant || !description || !dish_price || !img_src || !_id) {
        res.json({ error: true, msg: "missing info..." }).status(404)
        return
    };
    editDish(dish_name, restaurant, description, dish_price, img_src, icon, _id)
        .then(result => res.send(result))
        .catch(err => res.send(err))
});

//  ------- Delete Dish -------
router.delete('/delete', verifyUser, (req, res) => {
    const { _id } = req.body
    if (!_id) {
        res.json({ error: true, msg: "missing some info..." }).status(404);
        return
    }
    deleteDish(_id)
        .then(result => res.send(result))
        .catch(err => res.send(err));
});

module.exports = router;