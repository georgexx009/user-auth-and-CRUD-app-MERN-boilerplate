const userController = require('../../controllers/user.controller');

module.exports = async (req, res) => {
  const userPostsDoc = await userController.postsByUserId(req.username);
  if (userPostsDoc === null) {
    res.status(400).send('There was an error while searching for publications');
  }
  if (!userPostsDoc) {
    console.log('empty');
    res.send([]);
  } else {
    res.send(userPostsDoc);
  }
};
