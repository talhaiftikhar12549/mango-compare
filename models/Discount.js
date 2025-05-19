const mongoose = require('mongoose');

const DiscountSchema = new mongoose.Schema({
  medicineId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Medicine',
    required: true,
  },
  discount_statement: {
    type: String,
    required: true,
  },
  discount_type: {
    type: String,
    default: "New Customer",
    required: true,
  },
  discount_code: {
    type: String,
    required: true,
  },
  applied: {
    type: Boolean,
    default: false
  },
}, { timestamps: true });

module.exports = mongoose.model('Discount', DiscountSchema);