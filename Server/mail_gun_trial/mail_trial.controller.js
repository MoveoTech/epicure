const router = require('express').Router();
const sendMailGun = require('./mail_trial.handler');

router.post('/', (req, res) => {
    const { from, subject, body } = req.body
    sendMailGun(from, subject, body,res)
})



module.exports = router