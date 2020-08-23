const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getUserPosts,
  createNewPost,
  // updateUserPosts,
  // deletePost,
  // updatePost,
  getParams,
} = require('../middleware/posts');
const auth = require('../utils/auth');

const postController = require('../controllers/post.controller');

router.param('username', getParams.getParamsUsername);
router.param('postId', getParams.getParamsPostId);

router.get('/', getAllPosts);
router.get('/:username', getUserPosts); // postsByUsername - get the posts from a user
router.post('/create/:username', createNewPost);
// router.get('/:')
// router.post('/:username/updatePosts', updateUserPosts);
// router.delete('/:postId', deletePost);
//router.put(':postId', updatePost);

module.exports = router;
