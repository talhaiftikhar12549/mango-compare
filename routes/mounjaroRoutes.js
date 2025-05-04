const express = require('express');
const {
  getMounjaroListings,
  getMounjaroListing,
  createMounjaroListing,
  updateMounjaroListing,
  deleteMounjaroListing,
  getMounjaroStats
} = require('../controllers/mounjaroController');
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
  .get(getMounjaroListings)
  .post(
    protect,
    upload.single('pharmacyLogo'),
    handleUploadErrors,
    createMounjaroListing
  );

router.route('/stats/dosage')
  .get(getMounjaroStats);

router.route('/:id')
  .get(getMounjaroListing)
  .put(
    protect,
    upload.single('pharmacyLogo'),
    handleUploadErrors,
    updateMounjaroListing
  )
  .delete(protect, deleteMounjaroListing);

module.exports = router;