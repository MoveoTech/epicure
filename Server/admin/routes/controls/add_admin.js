const router = require('express').Router()
const { genSaltSync, hashSync } = require('bcrypt')
const { Admin } = require('../../models/admin');
const addAdmin = require('../handlers/add_admin.handler');


router.post('/', (req, res) => {
    const { password, username } = req.body;
    addAdmin(username, password, res);
});

module.exports = router