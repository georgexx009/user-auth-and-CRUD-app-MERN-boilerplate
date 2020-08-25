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

const postController = require('../controllers/post.controller');

router.param('username', getParams.getParamsUsername);
router.param('postId', getParams.getParamsPostId);

router.get('/', getAllPosts);
router.get('/:username', getUserPosts); // postsByUsername - get the posts from a user
router.post('/create/:username', createNewPost); // create a post with ref to a user
router.put('/:postId', updatePost);
router.delete('/:postId', deletePost);

module.exports = router;
