const express = require('express');
const {
  getDiscountListings,
  getDiscountListing,
  createDiscountListing,
  updateDiscountListing,
  deleteDiscountListing,
} = require('../controllers/discountController');
const { protect } = require('../middleware/auth');
const router = express.Router();

// Routes
router.route('/')
  .get(getDiscountListings)
  .post(
    protect,
    createDiscountListing
  );

router.route('/:id')
  .get(getDiscountListing)
  .put(
    protect,
    updateDiscountListing
  )
  .delete(protect, deleteDiscountListing);

module.exports = router;