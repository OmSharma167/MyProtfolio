const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  excerpt: {
    type: String,
    required: true
  },
  fullContent: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  readTime: {
    type: Number,
    required: true
  },
  coverImage: {
    type: String,
    required: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  additionalImages: [{
    type: String
  }]
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);
module.exports = BlogPost;