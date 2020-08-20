const {
  getAllPostsService,
  getMultiplePostsById,
  createNewPost,
  updateUserPostsService,
  deletePostService,
  updatePostService,
} = require('../services/posts.service');

const getParamsUsername = (req, res, next, username) => {
  req.username = username;
  next();
};

const getParamsPostId = (req, res, next, postId) => {
  req.postId = postId;
  next();
};

const getAllPosts = async (req, res) => {
  const allPosts = await getAllPostsService();
  if (!allPosts) {
    res.status(400).send('Error ocurred while getting all posts');
  } else {
    res.send(allPosts);
  }
};

const getUserPosts = async (req, res) => {
  const userPosts = await getMultiplePostsById(req.body);
  // if (userPosts === null) {
  //   res.status(400).send('There was an error while searching for publications');
  if (!userPosts) {
    console.log('empty');
    res.send([]);
  } else {
    res.send(userPosts);
  }
};

const savePost = async (req, res) => {
  const newPost = await createNewPost(req.body);
  if (!newPost) {
    res.status(400).send('Failed to save in the database');
  } else {
    res.send(newPost);
  }
};

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
