// routes/api/accounts.js

const express = require('express');
const passport = require('passport');
const router = express.Router();
const passwordValidation = require('../../validation/password-validation');
const validateCreateAccountInput = require('../../validation/create-account-validation');

const User = require('../../models/User');


// create new acount
router.post('/', (req, res) => {
    // validate input
    const validationResult = validateCreateAccountInput(req.body);
    if (!validationResult.isValid) {
        return res.status(400).json({ bad_input: { username: validationResult.errors.username, password: validationResult.errors.password } });
    }

    User.findOne({ username: req.body.username })
        .then(user => {
            if (user) {
                return res.status(200).json({ failed: "username_taken" });
            }
            else {
                const saltHash = passwordValidation.genPassword(req.body.password);
                const newUser = {
                    username: req.body.username,
                    hash: saltHash.hash,
                    salt: saltHash.salt,
                    joined_date: Date.now(),
                }
                User.create(newUser)
                    .then(user => res.json({ success: 'User added successfully' }))
                    .catch(err => res.status(400).json({ failedCreate: `Failed to create new user` }));
            }
        });
});

// authenticate "logged in" user
router.post('/user', (req, res) => {
    console.log("req" + JSON.stringify(req.session));
    if (req.isAuthenticated()) {
        res.status(200).send({ user: { loggedIn: true, username: req.user.username } });
    }
    else {
        res.status(200).send({ user: { loggedIn: false, username: '' } });
    }
});

// login
router.post('/login', passport.authenticate('local', { failureRedirect: '/accounts/login-failure' }), function (req, res) {
    console.log('User logged in:');
    console.log(req.user);
    res.status(200).send({ loggedIn: true, username: req.user.username });
});

router.get('/login-failure', (req, res) => {
    const user = req;
    console.log(req.user);
    console.log("failure");
    res.status(200).send({ loggedIn: false, username: '' });
});
// -----


// login
router.post('/logout', (req, res) => {
    if (req.isAuthenticated()) {
        req.session.destroy(function (err) {
            if (err) {
                res.status(200).send({ error: true, message: err });
            }
            else {

                res.status(200).send({ error: false, message: "Successfully logged out" });
            }
        });
    }
    else {
        res.status(200).send({ error: true, message: "User is not authenticated" });
    }
});
// -----

// Read

/*   GET A USER BY ID

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(404).json({ nouserfound: 'No user found' }));
});

*/

/* GET ALL USERS

router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json({ nousersfound: 'No users found' }));
});
*/

/* THIS ROUTE WILL DELETE ALL ACCOUNTS

router.delete('/delete-all-someone-do-it', (req, res) => {
    User.deleteMany({}, () => console.log("done deleting!"))
        .then(users => res.status(200).json(users))
        .catch(err => res.status(400).send(err));

});

*/

module.exports = router;