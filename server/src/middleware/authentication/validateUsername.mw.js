const userController = require('../../controllers/user.controller');

module.exports = async (req, res) => {
  const usernameAvailable = await userController.findByUsername(
    req.body.username
  );

  if (!usernameAvailable) {
    // username available
    res.sendStatus(204);
  } else {
    // username already took
    res.sendStatus(200);
  }
};
