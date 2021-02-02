const { route } = require('./chefs');

const router = require('express').Router();

router.post('/register', (req, res) => {
    const { fname, lname, username, password } = req.body
    if (!fname || !lname || !username || !password) {
        return res.json({ error: true, msg: "Missing some info" }).status(403)
    }
    res.send(req.body)

})

router.post('/login', (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.json({ error: true, msg: "Missing some info" }).status(403)
    }
    res.send(req.body)
})





module.exports = router