const mongoose = require('mongoose');

const WegovySchema = new mongoose.Schema({
  pharmacyLogo: {
    type: String,
    default: '', // stores file name or relative path
  },
  pharmacy: {
    type: String,
    required: [true, 'Please add a pharmacy name'],
    trim: true,
    maxlength: [100, 'Pharmacy name cannot be more than 100 characters']
  },
  dosage: {
    type: String,
    required: [true, 'Please add the dosage'],
    enum: [
      '2.5 mg',
      '5 mg',
      '7.5 mg',
      '10 mg',
      '12.5 mg',
      '15 mg'
    ]
  },
  price: {
    type: Number,
    required: [true, 'Please add the price'],
    min: [0, 'Price cannot be negative']
  },
  discount: {
    type: String,
    default: "",

  },
  rating: {
    type: Number,
    min: [0, 'Rating must be at least 0'],
    max: [5, 'Rating cannot be more than 5'],
    default: 0
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS'
    ]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Update the lastUpdated field before saving
WegovySchema.pre('save', function(next) {
  this.lastUpdated = Date.now();
  next();
});

// Calculate discounted price as a virtual field
WegovySchema.virtual('discountedPrice').get(function() {
  return this.price * (1 - (this.discount / 100));
});

module.exports = mongoose.model('Wegovy', WegovySchema);