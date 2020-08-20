const express = require('express');
const router = express.Router();
const {
  getParamsUsername,
  getParamsPostId,
  getAllPosts,
  getUserPosts,
  savePost,
  updateUserPosts,
  deletePost,
} = require('../middleware/posts.mw');
const auth = require('../utils/auth');

router.param('username', getParamsUsername);
router.param('postId', getParamsPostId);
router.get('/', getAllPosts);
router.post('/userPosts', auth, getUserPosts);
router.post('/savePost', savePost);
router.post('/:username/updatePosts', updateUserPosts);
router.delete('/:postId', deletePost);

module.exports = router;
