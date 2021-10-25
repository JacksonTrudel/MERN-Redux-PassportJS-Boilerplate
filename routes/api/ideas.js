// routes/api/ideas.js

const express = require('express');
const router = express.Router();

// Load Book model
const Idea = require('../../models/Idea');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('idea route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Idea.find()
        .then(ideas => res.json(ideas))
        .catch(err => res.status(404).json({ noideasfound: 'No ideas found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
    Idea.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({ nobookfound: 'No idea found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Idea.create(req.body)
        .then(book => res.json({ msg: 'Idea added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this idea' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Idea.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Idea.findByIdAndRemove(req.params.id, req.body)
        .then(idea => res.json({ mgs: 'Idea entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a idea' }));
});

module.exports = router;