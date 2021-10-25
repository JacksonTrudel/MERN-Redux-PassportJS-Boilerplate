// routes/api/ideas.js

const express = require('express');
const router = express.Router();

// Load idea model
const Idea = require('../../models/Idea');

// @route GET api/ideas/test
// @description tests ideas route
// @access Public
router.get('/test', (req, res) => res.send('idea route testing!'));

// @route GET api/ideas
// @description Get all ideas
// @access Public
router.get('/', (req, res) => {
    Idea.find()
        .then(ideas => res.json(ideas))
        .catch(err => res.status(404).json({ noideasfound: 'No ideas found' }));
});

// @route GET api/ideas/:id
// @description Get single idea by id
// @access Public
router.get('/:id', (req, res) => {
    Idea.findById(req.params.id)
        .then(idea => res.json(idea))
        .catch(err => res.status(404).json({ noideafound: 'No idea found' }));
});

// @route GET api/ideas
// @description add/save idea
// @access Public
router.post('/', (req, res) => {
    Idea.create(req.body)
        .then(idea => res.json({ msg: 'Idea added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this idea' }));
});

// @route GET api/ideas/:id
// @description Update idea
// @access Public
router.put('/:id', (req, res) => {
    Idea.findByIdAndUpdate(req.params.id, req.body)
        .then(idea => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/ideas/:id
// @description Delete idea by id
// @access Public
router.delete('/:id', (req, res) => {
    Idea.findByIdAndRemove(req.params.id, req.body)
        .then(idea => res.json({ mgs: 'Idea entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a idea' }));
});

module.exports = router;