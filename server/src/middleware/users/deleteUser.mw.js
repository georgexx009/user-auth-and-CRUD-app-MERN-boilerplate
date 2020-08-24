const userController = require('../../controllers/user.controller');

module.exports = async (req, res) => {
  const statusDelete = await userController.deleteUser(req.userId);

  res.send(statusDelete);
};
