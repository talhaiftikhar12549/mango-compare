const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
  },
  community: {
    type: String,
    enum: [
      'General Discussion',
      'Wegovy Experience',
      'Mounjaro Experience',
      'Lifestyle & Diet',
      'News & Research'
    ],
    required: true,
    default: 'General Discussion'
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tags: [
    {
      type: String,
      trim: true,
    },
  ],
  upvotes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  upvoteCount: {
    type: Number,
    default: 0,
  },
  downvotes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  commentsCount: {
    type: Number,
    default: 0,
  },
},
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Posts', PostsSchema);