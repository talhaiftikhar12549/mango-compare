const Wegovy = require('../models/Wegovy');
const ErrorResponse = require('../utils/errorResponse');
const path = require('path');
const fs = require('fs');

// @desc    Get all Wegovy listings
// @route   GET /api/wegovy
// @access  Public
exports.getWegovyListings = async (req, res, next) => {
  try {
    let query;
    let queryStr = JSON.stringify(req.query);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
    
    query = Wegovy.find(JSON.parse(queryStr));

    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 25;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Wegovy.countDocuments();

    query = query.skip(startIndex).limit(limit);

    const wegovyListings = await query;

    const pagination = {};
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }

    res.status(200).json({
      success: true,
      count: wegovyListings.length,
      pagination,
      data: wegovyListings
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single Wegovy listing
// @route   GET /api/wegovy/:id
// @access  Public
exports.getWegovyListing = async (req, res, next) => {
  try {
    const listing = await Wegovy.findById(req.params.id);

    if (!listing) {
      return next(
        new ErrorResponse(`Listing not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: listing
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new Wegovy listing
// @route   POST /api/wegovy
// @access  Private
exports.createWegovyListing = async (req, res, next) => {
  try {
    let logoPath = '';
    console.log("file available or not", req.file);
    if (req.file) {
      const host = `${req.protocol}://${req.get('host')}`;
      logoPath = `${host}/api/mounjaro/uploads/${req.file.filename}`;
      console.log("logo path for file", logoPath);
      
    }
    const listing = await Wegovy.create({
      pharmacyLogo: logoPath,
      pharmacy: req.body.pharmacy,
      dosage: req.body.dosage,
      price: req.body.price,
      discount: req.body.discount,
      rating: req.body.rating,
      website: req.body.website,
    });

    res.status(201).json({
      success: true,
      data: listing
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update Wegovy listing
// @route   PUT /api/wegovy/:id
// @access  Private
exports.updateWegovyListing = async (req, res, next) => {
  try {
    let listing = await Wegovy.findById(req.params.id);

    if (!listing) {
      return next(
        new ErrorResponse(`Listing not found with id of ${req.params.id}`, 404)
      );
    }

    // Update logo if a new file is uploaded
    let updatedLogo = listing.pharmacyLogo;
    if (req.file) {
      // Optionally delete old logo
      if (listing.pharmacyLogo) {
        const oldPath = path.join(__dirname, '..', listing.pharmacyLogo);
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
      updatedLogo = `/uploads/${req.file.filename}`;
    }

    listing = await Wegovy.findByIdAndUpdate(
      req.params.id,
      {
        pharmacyLogo: updatedLogo,
        pharmacy: req.body.pharmacy,
        dosage: req.body.dosage,
        price: req.body.price,
        discount: req.body.discount,
        rating: req.body.rating,
        website: req.body.website,
        
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      data: listing
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete Wegovy listing
// @route   DELETE /api/wegovy/:id
// @access  Private
exports.deleteWegovyListing = async (req, res, next) => {
  try {
    const listing = await Wegovy.findById(req.params.id);

    if (!listing) {
      return next(
        new ErrorResponse(`Listing not found with id of ${req.params.id}`, 404)
      );
    }

    // Delete logo file from disk
    if (listing.pharmacyLogo) {
      const logoPath = path.join(__dirname, '..', listing.pharmacyLogo);
      if (fs.existsSync(logoPath)) {
        fs.unlinkSync(logoPath);
      }
    }

    await listing.deleteOne();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get Wegovy price statistics by dosage
// @route   GET /api/wegovy/stats/dosage
// @access  Public
exports.getWegovyStats = async (req, res, next) => {
  try {
    const stats = await Wegovy.aggregate([
      {
        $group: {
          _id: '$dosage',
          count: { $sum: 1 },
          avgPrice: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
          avgDiscount: { $avg: '$discount' }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);

    res.status(200).json({
      success: true,
      data: stats
    });
  } catch (err) {
    next(err);
  }
};
