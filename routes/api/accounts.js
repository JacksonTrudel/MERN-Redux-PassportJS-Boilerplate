// routes/api/accounts.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../../models/User');

// create new acount
router.post('/', (req, res) => {
    User.findOne({ username: req.body.username })
        .then(user => {
            if (user) {
                console.log("username taken");
                return res.status(200).json({ failed: "username_taken" });
            }
            else {
                const newUser = req.body;
                // Hash password before saving in database
                bcrypt.genSalt(10, (err, salt) => {
                    // catch error
                    if (err) {
                        console.log(`bcrypt.genSalt err: ${err}`);
                        return res.status(400).json({ salt: `Could not generate password salt` });
                    }
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        // catch error
                        if (err) {
                            console.log(`bcrypt.hash err: ${err}`);
                            return res.status(400).json({ hash: `Unexpected hash error` });
                        }

                        // Create user if all is successful
                        newUser.password = hash;
                        User.create(newUser)
                            .then(user => res.json({ success: 'User added successfully' }))
                            .catch(err => res.status(400).json({ failedCreate: `Failed to create new user` }));
                    });
                });
            }
        });
});


// Read
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(404).json({ nouserfound: 'No user found' }));
});


// login route
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
        .catch(err => res.status(400).send(err));
});

router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json({ nousersfound: 'No users found' }));
});

// Update

// Delete

// delete all acounts
router.delete('/delete-all-someone-do-it', (req, res) => {
    User.deleteMany({}, () => console.log("done deleting!"))
        .then(users => res.status(200).json(users))
        .catch(err => res.status(400).send(err));

});

module.exports = router;