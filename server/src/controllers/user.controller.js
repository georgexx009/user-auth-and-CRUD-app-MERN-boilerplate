const UserModel = require('../database/models/user.model');

module.exports = {
  create: async userData => {
    let newUserDoc;
    try {
      newUserDoc = UserModel.create(userData);
    } catch (err) {
      console.log('An error ocurred while retrieving all users --');
      console.log(err.message);
      return null;
    }
    return newUserDoc;
  },
  getAll: async () => {
    let usersDoc;
    try {
      usersDoc = await UserModel.find();
    } catch (err) {
      console.log('An error ocurred while retrieving all users --');
      console.log(err.message);
      return null;
    }
    return usersDoc;
  },
  findById: async userId => {
    let userDoc;
    try {
      userDoc = await UserModel.findById(userId);
    } catch (err) {
      console.log('An error ocurred while searching for user by Id --');
      console.log(err.message);
      return null;
    }
    return userDoc;
  },
  findByUsername: async username => {
    let userDoc;
    try {
      userDoc = await UserModel.findOne({ username });
    } catch (err) {
      console.log('An error ocurred while searching for user by username --');
      console.log(err.message);
      return null;
    }

    return userDoc;
  },
  postsByUser: async (req, res) => {
    const { id } = req.params;
    const userPostsDoc = await UserModel.find({ _id: id }).populate('posts');
    res.send(userPostsDoc);
  },
};
