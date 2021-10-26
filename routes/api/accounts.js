// routes/api/accounts.js

const express = require('express');
const router = express.Router();

const User = require('../../models/User');

// create
router.post('/', (req, res) => {
    User.create(req.body)
        .then(book => res.json({ msg: 'Account added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add an account.' }));
});

// Read
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(404).json({ nouserfound: 'No user found' }));
});

router.post('/login', (req, res) => {
    console.log(req.query);
    User.findOne(req.query)
        .then((user) => {
            if (user) {
                res.status(200).send({ loginToken: `auth_${user.username}` });
            }
            else {
                res.status(200).send({ incorrectLogin: 'Incorrect login' });
            }
        })
        .catch(err => res.status(404).json({ incorrectLogin: 'Incorrect username & password combination' }));
    /*
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(404).json({ nouserfound: 'No user found' }));*/
});

router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
});

// Update

// Delete

module.exports = router;