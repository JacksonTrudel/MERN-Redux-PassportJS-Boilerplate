const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author_id: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    like_count: {
        type: Number,
        required: true,
        default: 0,
    },
    dislike_count: {
        type: Number,
        required: true,
        default: 0,
    },
    posted_time: {
        type: Date,
        default: Date.now
    }
});

module.exports = Idea = mongoose.model('idea', IdeaSchema);