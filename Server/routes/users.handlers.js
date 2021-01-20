const User = require('../models/user');
const { genSaltSync, compareSync, hashSync } = require("bcrypt");

const getAllUsers = (skip = 0, limit = 0) => {
    skip = +skip;
    limit = +limit;
    return User.find({ deleted: false }, {}, { skip, limit })
};

const getSingleUser = (userId) => {
    return User.findById(userId)
};

const addNewUser = (fname, lname, age, email, password) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);

    return new User({
        fname, lname, age, email, password: hash
    }).save()
};

const updateUserInfo = (userId, email) => {
    return User.updateOne({ _id: userId }, { email })
};

const removeUser = (userId) => {
    return User.updateOne({ _id: userId }, { deleted: true })
}


module.exports = { getAllUsers, getSingleUser, addNewUser, updateUserInfo, removeUser }