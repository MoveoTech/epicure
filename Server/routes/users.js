const router = require('express').Router()
const User = require('../models/user')
const { getAllUsers, addNewUser, getSingleUser, updateUserInfo, removeUser } = require('./users.handlers')

//  ----- Get all users -----

router.get('/', (req, res) => {
    const { skip, limit } = req.query
    getAllUsers(skip, limit)
        .then(users => {
            res.send(users)
        })
        .catch(err => res.send(err.codeName))
});

// -----  Get single user ------

router.get('/:id', (req, res) => {
    getSingleUser(req.params.id)
        .then(user => res.send(user))
        .catch(err => res.status(404).json({ error: true, msg: "No match found..." }))
});

//  ---- Add new user -----

router.post('/add', (req, res) => {
    const { fname, lname, age, email, password } = req.body;
    if (!fname || !lname || !age || !email || !password) {
        res.json({ error: true, msg: "Missing some information..." })
        return;
    };
    addNewUser(fname, lname, age, email, password)
        .then(user => res.send(user))
        .catch(err => res.json({ error: true, msg: "Email already taken" }))
});


// ----- Update user info -----

router.patch('/:id', (req, res) => {
    const { email } = req.body
    if (!email) {
        res.json({ error: true, msg: "Missing some information..." })
        return;
    };
    updateUserInfo(req.params.id, email)
        .then(result => res.json({ error: false, msg: "User data modified" }))
        .catch(err => res.send(err))
});

//  ------- Remove user --------

router.delete('/remove/:id', (req, res) => {
    removeUser(req.params.id)
        .then(result => res.json({ error: false, msg: "User removed!" }))
        .catch(err => console.log(err))
});


module.exports = router

// robo3t