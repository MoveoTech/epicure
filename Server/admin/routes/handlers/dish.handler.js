const SignatureDish = require('../../../models/signature_dish');

const addDish = (dish_name, restaurant, description, dish_price, img_src, icon) => {
    return new SignatureDish({ dish_name, restaurant, description, img_src, dish_price, icon }).save()
}

const editDish = (dish_name, restaurant, description, dish_price, img_src, icon, _id) => {
    return SignatureDish.findOneAndUpdate(
        { _id },
        { dish_name, restaurant, description, dish_price, img_src, icon },
        { new: true }
    );
    // {new : true -> returns the updated object}
};

const deleteDish = (_id) => {
    return SignatureDish.updateOne({ _id }, { deleted: true });
}

module.exports = { addDish, editDish, deleteDish }