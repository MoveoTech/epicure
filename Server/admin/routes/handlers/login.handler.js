const { Admin } = require('../../models/admin')
const { compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (username, password, res) => {
    if (!username || !password) {
        res.json({ error: true, msg: "Missing Info..." }).status(403);
        console.log('called 1 ')
        return
    }
    try {
        const user = await Admin.find({ username })
        if (user.length === 0) {
            console.log('called 3 ')

            res.json({ error: true, msg: "Username or password are incorrect" }).status(403);
            return
        } else {
            if (compareSync(password, user[0].password)) {
                console.log('called 4')

                let access_token = jwt.sign({ id: user[0]._id }, "epicure", { expiresIn: "45m" });
                res.json({ access_token })
            } else {
                console.log('called 5   ')
                res.json({ error: true, msg: "Username or password are incorrect" }).status(403);
            }
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = login 