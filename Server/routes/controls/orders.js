const { addOrder, getUserOrders, removeOrder } = require('../handlers/orders.handler');
const verifyUser = require('../../admin/authentication/verification.middleware')
const router = require('express').Router();

router.post('/add', (req, res) => {
    const { user, quantity, dish, side_dish } = req.body
    if (!user || !quantity || !dish || !side_dish) {
        res.status(404).json({ error: true, msg: "missing some info..." })
    }
    addOrder(user, dish, quantity, side_dish)
        .then(order => res.send(order))
        .catch(err => res.status(404).send(err))
})

router.get('/', verifyUser, (req, res) => {
    getUserOrders(req.user._id)
        .then(result => res.send(result))
})

router.delete('/', verifyUser, (req, res) => {
    const { _id } = req.body;
    removeOrder(_id)
        .then(() => {
            getUserOrders(req.user._id)
                .then(result => res.send(result))
        })
        .catch(err => res.status(403).send(err))
})




module.exports = router