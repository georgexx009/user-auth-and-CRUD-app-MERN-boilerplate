const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// setting post schema
const PostSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Users',
  },
  content: {
    type: String,
    required: true,
  },
});

// create post model
const postModel = mongoose.model('Posts', PostSchema);

module.exports = postModel;
