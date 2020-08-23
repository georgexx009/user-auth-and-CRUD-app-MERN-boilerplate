const userController = require('../../controllers/user.controller');

module.exports = async (req, res) => {
  const updatedUserDoc = await userController.updateUser(req.userId, req.body);
  if (updatedUserDoc === null) {
    res.status(400).send('an error ocurred while updating user data');
  } else if (!updatedUserDoc) {
    res.status(404).send('no user found');
  } else {
    res.send(updatedUserDoc);
  }
};
