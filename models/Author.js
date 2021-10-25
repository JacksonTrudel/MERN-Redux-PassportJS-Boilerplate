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
    },
    ideas: [mongoose.Types.ObjectId],
    joined_date: {
        type: Date,
        deault: Date.now
    }
});

module.exports = Author = mongoose.model('author', AuthorSchema);