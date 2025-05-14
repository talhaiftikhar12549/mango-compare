const mongoose = require('mongoose');
const slugify = require('slugify');

const BlogsSchema = new mongoose.Schema({
  featuredImage: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  meta_title: {
    type: String,
    required: true,
    trim: true,
  },
  meta_description: {
    type: String,
    required: true,
    trim: true,
  },
  keywords: [String],
  categories: [String],
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  excerpt: {
    type: String,
    default: '',
    maxlength: 300,
  },
  content: {
    type: String,
    required: true,
  },
  tags: [String],
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
  views: {
    type: Number,
    default: 0,
  }
}, { timestamps: true });

// Auto-generate slug from title
BlogsSchema.pre('validate', function(next) {
  if (this.title && !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model('Blog', BlogsSchema);
