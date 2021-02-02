const Restaurant = require('../../models/restaurant')
const { Order } = require('../../models/order')
const SignatureDish = require('../../models/signature_dish')

const addOrder = (user, dish, quantity) => {
    return new Order({ user, dish, quantity }).save()
}

const getUserOrders = (user_id) => {
    return Order.find({ user: user_id, payed: false }).populate('user', 'fname lname username')
        .populate([ // populate the dish original restaurant
            {
                path: 'dish', model: SignatureDish,
                populate: {
                    path: 'restaurant', model: Restaurant,
                    select: 'name'
                }
            }
        ])
}

module.exports = { addOrder, getUserOrders }