const {
  getAllPostsService,
  getMultiplePostsById,
  createNewPost,
  updateUserPostsService,
  deletePostService,
  updatePostService,
} = require('../services/posts.service');

const updateUserPosts = async (req, res) => {
  const userUpdated = await updateUserPostsService(
    req.username,
    req.body.posts
  );
  if (!userUpdated) {
    res.status(400).send('failed to update posts in user');
  } else {
    res.send(userUpdated);
  }
};

const deletePost = async (req, res) => {
  const deleteResult = await deletePostService(req.postId);
  console.log(deleteResult);
  if (!deleteResult.ok) {
    res.status(400).send('failed to delete post');
  } else {
    res.sendStatus(200);
  }
};

const updatePost = async (req, res) => {
  const updatedPost = await updatePostService(req.postId);
};

module.exports = {
  getParamsUsername,
  getParamsPostId,
  getAllPosts,
  getUserPosts,
  savePost,
  updateUserPosts,
  deletePost,
  updatePost,
};
