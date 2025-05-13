const express = require('express');
const {
   handleContactForm, 
  getContactListings,
  getContactListing,
  deleteContactListing,
} = require('../controllers/contactController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post("/form", handleContactForm);

// Routes
router.route('/')
  .get(getContactListings)

router.route('/:id')
  .get(getContactListing)
  .delete(protect, deleteContactListing);

module.exports = router;