const postController = require('../../controllers/post.controller');

module.exports = async (req, res) => {
  const updatedPostDoc = await postController.update(req.postId, req.body);
  if (updatedPostDoc === null) {
    res.status(400).send('error ocurred while updating post');
  }
  if (!updatedPostDoc) {
    res.status(404).send('post not found');
  }
  res.send(updatedPostDoc);
};
