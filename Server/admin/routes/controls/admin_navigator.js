const verifyUser = require('../../authentication/verification.middleware');

const router = require('express').Router();

router.use('/add-admin', require('./add_admin'));
router.use('/login', require('./login'));
router.use('/dish', require('./dish'));
router.use('/restaurants', require('./restaurant'));
router.use('/chef', require('./chef'))

router.get('/verify', verifyUser, (req, res) => {
    res.send(req.user)
});


module.exports = router