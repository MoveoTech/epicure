const { login, register } = require('../handlers/login.handler');

const router = require('express').Router();

router.post('/register', (req, res) => {
    const { fname, lname, username, password } = req.body
    if (!fname || !lname || !username || !password) {
        return res.status(404).json({ error: true, msg: "Missing some info" })
    }
    register(fname, lname, username, password, res)
})

router.post('/login', (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(404).json({ error: true, msg: "Missing some info" })
    }
    login(username, password, res);
})





module.exports = router