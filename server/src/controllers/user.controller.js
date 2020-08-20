const UserModel = require('../database/models/user.model');

module.exports = {
  create: async (req, res) => {
    console.log('hit create');
    const { firstName, lastName, username, password } = req.body;
    const userDoc = await UserModel.create({
      firstName,
      lastName,
      username,
      password,
    });
    res.send(userDoc);
  },
  find: async (req, res) => {
    const { username } = req.body;
    const userDoc = await UserModel.find({ username });
    res.send(userDoc);
  },
  postsByUser: async (req, res) => {
    const { id } = req.params;
    const userPostsDoc = await UserModel.find({ _id: id }).populate('posts');
    res.send(userPostsDoc);
  },
};
