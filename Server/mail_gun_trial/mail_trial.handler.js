const sendMailGun = (from, subject, body, res) => {
    const api_key = '9cbf0c83bc1da8b80f25ec2f14e97e32-07bc7b05-e66fafac';
    const domain = 'sandbox3f17821059644a96ab067efcc46492c1.mailgun.org';
    const mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

    const data = {
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
}

module.exports = sendMailGun