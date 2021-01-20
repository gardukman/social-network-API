const router = require('express').Router();

const { getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend } = require('../../controllers/user-controller');

// route for /users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// route for /users/:userId
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// friend routes
router
    .route('/:userId/friends/:friendsId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;