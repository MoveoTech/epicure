const router = require('express').Router();
const verifyUser = require('../../authentication/verification.middleware');
const { addChef, editChef, deleteChef } = require('../handlers/chef.handler');

// ----- Add Chef -------
router.post('/add', verifyUser, (req, res) => {
    const { name, description, restaurants, img_src } = req.body;
    if (!name || !description || !restaurants || !img_src) {
        res.json({ error: true, msg: "Missing some info..." }).status(404);
        return;
    }
    addChef(name, description, restaurants, img_src)
        .then(result => res.send(result))
        .catch(err => res.send(err))
});

router.put('/edit', verifyUser, (req, res) => {
    const { _id, name, description, restaurants, img_src } = req.body
    if (!name || !description || !restaurants || !img_src || !_id) {
        res.json({ error: true, msg: "Missing some info..." }).status(404);
        return;
    }
    editChef(_id, name, description, restaurants, img_src)
        .then(result => res.send(result))
        .catch(err => res.send(err))
});

router.delete('/delete', verifyUser, (req, res) => {
    const { _id } = req.body
    if (!_id) {
        res.json({ error: true, msg: "Missing some info..." }).status(404)
        return;
    }
    deleteChef(_id)
        .then(result => res.send(result))
        .catch(err => res.send(err))
})

module.exports = router;