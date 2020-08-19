const {
  getAllPostsService,
  getMultiplePostsById,
  createNewPost,
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
  console.log('reach');
  const userPosts = await getMultiplePostsById(req.body);
  // if (userPosts === null) {
  //   res.status(400).send('There was an error while searching for publications');
  if (!userPosts) {
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

module.exports = {
  getParamsUsername,
  getParamsPostId,
  getAllPosts,
  getUserPosts,
  savePost,
};
