const { addOrder, getUserOrders } = require('../handlers/orders.handler');
const verifyUser = require('../../admin/authentication/verification.middleware')
const router = require('express').Router();

router.post('/add', (req, res) => {
    const { user, quantity, dish } = req.body
    if (!user || !quantity || !dish) {
        res.status(404).json({ error: true, msg: "missing some info..." })
    }
    addOrder(user, dish, quantity)
        .then(order => res.send(order))
        .catch(err => res.status(404).send(err))
})

router.get('/', verifyUser, (req, res) => {
    getUserOrders(req.user._id)
        .then(result => res.send(result))
})




module.exports = router