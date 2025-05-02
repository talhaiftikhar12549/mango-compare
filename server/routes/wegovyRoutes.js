const express = require('express');
const {
  getWegovyListings,
  getWegovyListing,
  createWegovyListing,
  updateWegovyListing,
  deleteWegovyListing,
  getWegovyStats
} = require('../controllers/wegovyController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

// Error handling middleware for file uploads
const handleUploadErrors = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // A Multer error occurred when uploading
    return res.status(400).json({
      success: false,
      error: err.message
    });
  } else if (err) {
    // An unknown error occurred
    return res.status(500).json({
      success: false,
      error: err.message || 'File upload failed'
    });
  }
  next();
};

// Routes
router.route('/')
  .get(getWegovyListings)
  .post(
    protect,
    upload.single('pharmacyLogo'),
    handleUploadErrors,
    createWegovyListing
  );

router.route('/stats/dosage')
  .get(getWegovyStats);

router.route('/:id')
  .get(getWegovyListing)
  .put(
    protect,
    upload.single('pharmacyLogo'),
    handleUploadErrors,
    updateWegovyListing
  )
  .delete(protect, deleteWegovyListing);

module.exports = router;