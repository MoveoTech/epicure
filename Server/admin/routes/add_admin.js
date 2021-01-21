const router = require('express').Router()
const { genSaltSync, hashSync } = require('bcrypt')
const { Admin } = require('../models/admin')


router.post('/', (req, res) => {
    const { password, username } = req.body;
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt)
    new Admin({ password: hash, username }).save()
        .then(result => res.send(result))
        .catch(err => res.send(err))
})

module.exports = router