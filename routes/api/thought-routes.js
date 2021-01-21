const router = require('express').Router();
const {
    getAllThoughts,
    findThoughtById,
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

//thought routes /thoughts
router.route('/')
.get(getAllThoughts);

//thought routes /thoughts/userId
router.route('/:userId').post(addThought);

//routes to remove thought and add reactions
router.route('/:userId/:thoughtId')
.get(findThoughtById)
.put(addReaction)
.delete(removeThought);

//routes to delete reactions
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);


module.exports = router;