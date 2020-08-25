/*
	first create the post 
	then find the user and push it to post property
*/

const UserModel = require('../database/models/user.model');
const PostModel = require('../database/models/post.model');

module.exports = {
  create: async (username, content) => {
    const user = await UserModel.findOne({ username });
    const postDoc = await PostModel.create({
      userId: user._id,
      content,
    });

    user.posts.push(postDoc);
    await user.save();
    return postDoc;
  },
  getAll: async () => {
    let allPostsDoc;
    try {
      allPostsDoc = await PostModel.find().populate('userId');
    } catch (err) {
      console.log('An error ocurred while retrieving all posts --');
      console.log(err.message);
      return null;
    }

    return allPostsDoc;
  },
  update: async (postId, newData) => {
    let updatedPostDoc;
    try {
      updatedPostDoc = await PostModel.findByIdAndUpdate(postId, newData, {
        new: true,
      });
    } catch (err) {
      console.log('An error ocurred while updating a post --');
      console.log(err.message);
      return null;
    }
    return updatedPostDoc;
  },
  delete: async postId => {
    let deletedPostDoc;
    try {
      deletedPostDoc = await PostModel.findByIdAndDelete(postId);
    } catch (err) {
      console.log('An error ocurred while updating a post --');
      console.log(err.message);
      return null;
    }
    return deletedPostDoc;
  },
};
