const postController = require('../../controllers/post.controller');

module.exports = async (req, res) => {
  const newPostDoc = await postController.create(
    req.username,
    req.body.content
  );
  if (!newPostDoc) {
    res.status(400).send('Failed to save in the database');
  } else {
    res.send(newPostDoc);
  }
};
