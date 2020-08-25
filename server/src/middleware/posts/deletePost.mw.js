const postController = require('../../controllers/post.controller');

module.exports = async (req, res) => {
  const deletedPostDoc = await postController.delete(req.postId);
  if (deletedPostDoc === null) {
    res.status(400).send('error ocurred while deleting post');
  }
  if (!deletedPostDoc) {
    res.status(404).send('post not found');
  }
  res.send(deletedPostDoc);
};
