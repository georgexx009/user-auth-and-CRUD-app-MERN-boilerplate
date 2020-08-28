const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getUserPosts,
  createNewPost,
  updatePost,
  deletePost,
  getParams,
} = require('../middleware/posts');
const auth = require('../utils/auth');

router.param('username', getParams.getParamsUsername);
router.param('postId', getParams.getParamsPostId);

router.get('/', getAllPosts);
router.get('/:username', getUserPosts); // postsByUsername - get the posts from a user
router.post('/create/:username', auth, createNewPost); // create a post with ref to a user
router.put('/:postId', auth, updatePost);
router.delete('/:postId', auth, deletePost);

module.exports = router;
