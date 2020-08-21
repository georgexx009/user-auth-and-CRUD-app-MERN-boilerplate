/*
	first create the post 
	then find the user and push it to post property
*/

const UserModel = require('../database/models/user.model');
const PostModel = require('../database/models/post.model');

module.exports = {
  create: async (req, res) => {
    const userId = req.params.id;
    const { content } = req.body;
    const postDoc = await PostModel.create({
      username: userId,
      content,
    });

    //await postDoc.save();

    const user = await UserModel.findById(userId);
    console.log(user);
    user.posts.push(postDoc);
    await user.save();
    res.send(user);
  },
  getAll: async () => {
    let allPostsDoc;
    try {
      allPostsDoc = await PostModel.find();
    } catch (err) {
      console.log('An error ocurred while retrieving all posts --');
      console.log(err.message);
      return null;
    }

    return allPostsDoc;
  },
  userByPost: async (req, res) => {
    const { id } = req.params;
    const userByPost = await PostModel.findById(id).populate('username');
    res.send(userByPost);
  },
};
