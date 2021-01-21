const router = require('express').Router();

router.use('/add-admin', require('./add_admin'));
router.use('/login', require('./login'));
router.use('/dish', require('./dish'));
router.use('/restaurants', require('./restaurant'));
router.use('/chef', require('./chef'))

module.exports = router