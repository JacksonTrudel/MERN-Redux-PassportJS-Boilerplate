// User model
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    joined_date: {
        type: Date,
        deault: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);