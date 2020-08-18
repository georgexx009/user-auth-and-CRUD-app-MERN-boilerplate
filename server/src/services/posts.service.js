const PostModel = require('../database/models/post.model');
const UserModel = require('../database/models/user.model');

const getAllPostsService = async () => {
  let postsDoc;
  try {
    postsDoc = await PostModel.find();
  } catch (err) {
    console.log('An error ocurred retrieving all posts:');
    console.log(err.message);
    return null;
  }

  return postsDoc;
};

const getMultiplePostsById = async posts => {
  let postsDoc;
  try {
    postsFound = await PostModel.find({ _id: posts });
  } catch (err) {
    console.log('An error ocurred retrieving multiple posts:');
    console.log(err.message);
    return null;
  }

  return postsDoc;
};

const createNewPost = async postData => {
  if (!postData) {
    throw new Error('new post data missing');
  }
  let newPostDoc;
  try {
    newPostDoc = await PostModel.create(postData);
  } catch (err) {
    console.log('An error ocurred while creating new post:');
    console.log(err.message);
    return null;
  }
  return newPostDoc;
};

module.exports = { getAllPostsService, getMultiplePostsById, createNewPost };
