const router = require('express').Router()


router.post('/', (req, res) => {
    const { from, to, subject, body } = req.body
    var api_key = '9cbf0c83bc1da8b80f25ec2f14e97e32-07bc7b05-e66fafac';
    var domain = 'sandbox3f17821059644a96ab067efcc46492c1.mailgun.org';
    var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

    var data = {
        from: `${from} <rong@moveo.co.il>`,
        to: `rong@moveo.co.il`,
        subject,
        text: body
    };

    mailgun.messages().send(data, function (error, body) {
        if (error) {
            console.log(error)
            res.sendStatus(500)
            return
        };
        console.log(body);
        res.json({ error: false, msg: "Mail Sent Succesfully!" })
    });
})



module.exports = router