const express = require('express');
const router = express.Router();
const {
  getParamUserId,
  getAllUsers,
  getUserById,
} = require('../middleware/users');

router.param('userId', getParamUserId);

router.get('/', getAllUsers); // get all users
router.get('/:userId', getUserById); // get single users

module.exports = router;
