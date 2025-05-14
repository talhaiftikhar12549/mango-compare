const express = require('express');
const multer = require('multer');
const {
  getAllBlogs,
  getSingleBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogsController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

// Error handling middleware for file uploads
const handleUploadErrors = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  } else if (err) {
    return res.status(500).json({
      success: false,
      error: err.message || 'File upload failed',
    });
  }
  next();
};

// Routes
router.route('/')
  .get(getAllBlogs)
  .post(
    protect,
    upload.single('featuredImage'),
    handleUploadErrors,
    createBlog
  );

router.route('/:id')
  .get(getSingleBlog)
  .put(
    protect,
    upload.single('featuredImage'),
    handleUploadErrors,
    updateBlog
  )
  .delete(protect, deleteBlog);

module.exports = router;
