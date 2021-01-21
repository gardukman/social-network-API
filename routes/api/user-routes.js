const router = require('express').Router();
const { getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend } = require('../../controllers/user-controller');

//friend routes
router
    .route('/:userId/friends/:friendsId')
    .post(addFriend)
    .delete(removeFriend);
//routes for /users

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

//routes for /users/:userId
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);



module.exports = router;