const express = require('express');
const router = express.Router();
const {
  getParamsUsername,
  getParamsPostId,
  getAllPosts,
  getUserPosts,
  savePost,
} = require('../middleware/posts.mw');
const auth = require('../utils/auth');

router.param('username', getParamsUsername);
router.param('postId', getParamsPostId);
router.get('/', getAllPosts);
router.post('/userPosts', auth, getUserPosts);
router.post('/savePost', savePost);

module.exports = router;
