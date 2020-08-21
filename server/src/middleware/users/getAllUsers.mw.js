const userController = require('../../controllers/user.controller');

module.exports = async (req, res) => {
  const resController = await userController.getAll();
  if (resController === null) {
    res.status(400).send('an error ocurred while getting all users');
  } else if (!resController) {
    res.send([]);
  } else {
    res.send(resController);
  }
};
