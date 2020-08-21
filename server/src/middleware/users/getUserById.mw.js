const userController = require('../../controllers/user.controller');

module.exports = async (req, res) => {
  const resController = await userController.findById(req.userId);
  if (resController === null) {
    res.status(400).send('an error ocurred while getting all users');
  } else if (!resController) {
    res.sendStatus(204);
  } else {
    res.send(resController);
  }
};
