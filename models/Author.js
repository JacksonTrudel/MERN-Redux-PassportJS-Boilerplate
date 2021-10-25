const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    idea_count: {
        type: String,
        required: true,
        default: 0
    }
});

module.exports = Author = mongoose.model('author', AuthorSchema);