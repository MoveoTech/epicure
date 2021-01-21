const router = require('express').Router();
const { Admin } = require('../../models/admin')
const { compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
const login = require('../handlers/login.handler');

router.post('/',  (req, res) => {
    const { username, password } = req.body;
    login(username, password, res);
});


module.exports = router
