const router = require('express').Router();
const { Admin } = require('../models/admin')
const { compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) res.json({ error: true, msg: "Missing Info..." }).sendStatus(403);
    const user = await Admin.find({ username })
    if (user.length === 0) {
        res.json({ error: true, msg: "Username or password are incorrect" }).sendStatus(403);
    } else {
        if (compareSync(password, user[0].password)) {
            let access_token = jwt.sign({ id: user[0]._id }, "epicure", { expiresIn: "45m" });
            res.json({ access_token })
        } else {
            res.json({ error: true, msg: "Username or password are incorrect" }).sendStatus(403);
        }
    }
});


module.exports = router
