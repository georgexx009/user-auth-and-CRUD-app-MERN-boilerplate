const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// setting post schema
const PostSchema = new Schema({
  username: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'UserV2',
  },
  content: {
    type: String,
    required: true,
  },
});

// create post model
const postModel = mongoose.model('posts', PostSchema);

module.exports = postModel;
