const router = require('express').Router();
const {
    getAllThoughts,
    findThoughtsById,
    addThoughts,
    removeThoughts,
    addReaction,
    removeReaction
} = require('../../controllers/thoughts-controller');

// route for (/thoughts)
router.route('/')
.get(getAllThoughts);


// route for (/thoughts/userId)
router.route('/:userId').post(addThoughts);

//routes for removing thoughts and adding reactions
router.route('/:userId/:thoughtId')
.get(findThoughtsById)
.put(addReaction)
.delete(removeThoughts);

// route to delete reactions
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;