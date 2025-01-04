const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');
const multer = require('multer');
const path = require('path');

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});


const upload = multer({ storage: storage });



// Get all blog posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single blog post
router.get('/posts/:id', async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new blog post
router.post('/posts', upload.array('images'), async (req, res) => {
  try {
    const { title, excerpt, fullContent, readTime, tags } = req.body;
    
    // Handle uploaded images
    const imageFiles = req.files || [];
    const imageUrls = imageFiles.map(file => `/uploads/${file.filename}`);
    
    const blogPost = new BlogPost({
      title,
      excerpt,
      fullContent,
      readTime: parseInt(readTime),
      tags: JSON.parse(tags),
      coverImage: imageUrls[0] || '',
      additionalImages: imageUrls.slice(1)
    });

    const savedPost = await blogPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update blog post
router.put('/posts/:id', upload.array('images'), async (req, res) => {
  try {
    const { title, excerpt, fullContent, readTime, tags } = req.body;
    
    // Handle new uploaded images
    const imageFiles = req.files || [];
    const newImageUrls = imageFiles.map(file => `/uploads/${file.filename}`);
    
    const post = await BlogPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    post.title = title || post.title;
    post.excerpt = excerpt || post.excerpt;
    post.fullContent = fullContent || post.fullContent;
    post.readTime = parseInt(readTime) || post.readTime;
    post.tags = JSON.parse(tags) || post.tags;
    
    if (newImageUrls.length > 0) {
      post.coverImage = newImageUrls[0];
      post.additionalImages = newImageUrls.slice(1);
    }

    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete blog post
router.delete('/posts/:id', async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    await post.remove();
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
