const Restaurant = require('../../../models/restaurant');


const addRestaurant = (name, chef, img_src, popularity, address, hours, phoneNumber) => {
    return new Restaurant({ name, chef, img_src, popularity, address, hours, phoneNumber }).save()
}

const editRestaurant = (_id, name, chef, img_src, popularity, address, hours, phoneNumber) => {
    return Restaurant.findOneAndUpdate(
        { _id },
        { name, chef, img_src, popularity, address, hours, phoneNumber },
        { new: true }
    );
    // {new : true -> returns the updated object}
};

const deleteRestaurant = (_id) => {
    return Restaurant.updateOne({ _id }, { deleted: true });
}

module.exports = { addRestaurant, editRestaurant, deleteRestaurant };