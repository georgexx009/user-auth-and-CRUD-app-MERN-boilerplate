const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getUserPosts,
  // savePost,
  // updateUserPosts,
  // deletePost,
  // updatePost,
  getParams,
} = require('../middleware/posts');
const auth = require('../utils/auth');

router.param('username', getParams.getParamsUsername);
router.param('postId', getParams.getParamsPostId);

router.get('/', getAllPosts);
router.get('/:username', getUserPosts);
// router.post('/savePost', savePost);
// router.post('/:username/updatePosts', updateUserPosts);
// router.delete('/:postId', deletePost);
// router.put(':postId', updatePost);

module.exports = router;
