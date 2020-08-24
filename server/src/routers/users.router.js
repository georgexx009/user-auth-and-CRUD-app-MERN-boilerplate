const express = require('express');
const router = express.Router();
const {
  getParamUserId,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../middleware/users');

router.param('userId', getParamUserId);

/*
  get single element
  get all elements
  create new element
  update an element
  delete an element
*/

router.get('/', getAllUsers); // get all users
router.get('/:userId', getUserById); // get single users
router.put('/:userId', updateUser); // update an existing user
router.delete('/:userId', deleteUser); // delete user passing user id

module.exports = router;
