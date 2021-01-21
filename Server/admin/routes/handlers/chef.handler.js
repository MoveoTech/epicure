const Chef = require('../../../models/chef');


const addChef = (name, description, restaurants, img_src) => {
    return new Chef({ name, description, restaurants, img_src }).save()
}

const editChef = (_id, name, description, restaurants, img_src) => {
    return Chef.findOneAndUpdate(
        { _id },
        { name, description, restaurants, img_src },
        { new: true }
    );
    // {new : true -> returns the updated object}
};

const deleteChef = (_id) => {
    return Chef.updateOne({ _id }, { deleted: true });
}

module.exports = { addChef, editChef, deleteChef };