const userController = require('../../controllers/user.controller');

module.exports = async (req, res) => {
  const usernameAvailable = await userController.findByUsername(
    req.body.username
  );

  // handle error
  if (usernameAvailable === null) {
    res.status(400).send('an error ocurred while validating username');
  } // ----------------------------------------
  else if (usernameAvailable) {
    // username already took
    res.sendStatus(200);
  } else {
    // username available
    res.sendStatus(204);
  }
};
