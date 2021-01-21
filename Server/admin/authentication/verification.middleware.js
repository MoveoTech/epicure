const jwt = require('jsonwebtoken')

const verifyUser = (req, res, next) => {
    if (req.header('Authorization')) {
        jwt.verify(req.header('Authorization'), 'epicure', (err, user) => {
            if (err) {
                res.status(403).json({ error: true, msg: err.message })
            } else {
                req.user = user
                next()
            }
        })
    } else {
        res.status(401).json({ error: true, msg: 'Expected Token' })
    }
}

module.exports = verifyUser;