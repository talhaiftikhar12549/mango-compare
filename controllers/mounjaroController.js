const Mounjaro = require('../models/Mounjaro');
const ErrorResponse = require('../utils/errorResponse');
const path = require('path');
const fs = require('fs');

// @desc    Get all Mounjaro listings
// @route   GET /api/mounjaro
// @access  Public
exports.getMounjaroListings = async (req, res, next) => {
  try {
    let query;
    let queryStr = JSON.stringify(req.query);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
    
    query = Mounjaro.find(JSON.parse(queryStr));

    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 1000;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Mounjaro.countDocuments();

    query = query.skip(startIndex).limit(limit);

    const mounjaroListings = await query;

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
      count: mounjaroListings.length,
      pagination,
      data: mounjaroListings
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single Mounjaro listing
// @route   GET /api/mounjaro/:id
// @access  Public
exports.getMounjaroListing = async (req, res, next) => {
  try {
    const listing = await Mounjaro.findById(req.params.id);

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

// @desc    Create new Mounjaro listing
// @route   POST /api/mounjaro
// @access  Private
exports.createMounjaroListing = async (req, res, next) => {
  try {
    let logoPath = '';
    console.log("file available or not", req.file);
    if (req.file) {
      // const host = `${req.protocol}://${req.get('host')}`;
      logoPath = req.file.path;
      console.log("logo path for file", logoPath);  
    }
    const listing = await Mounjaro.create({
      pharmacyLogo: logoPath,
      pharmacy: req.body.pharmacy,
      medicine: req.body.medicine || 'Mounjaro', // default fallback in case body is missing it
      dosage: req.body.dosage,
      price: req.body.price,
      discount: req.body.discount,
       discount_info: req.body.discount_info, 
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

// @desc    Update Mounjaro listing
// @route   PUT /api/mounjaro/:id
// @access  Private
exports.updateMounjaroListing = async (req, res, next) => {
  try {
    let listing = await Mounjaro.findById(req.params.id);

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
      // const host = `${req.protocol}://${req.get('host')}`;
      updatedLogo = req.file.path;
    }

    listing = await Mounjaro.findByIdAndUpdate(
      req.params.id,
      {
        pharmacyLogo: updatedLogo,
       pharmacy: req.body.pharmacy,
      medicine: req.body.medicine || 'Mounjaro',
      dosage: req.body.dosage,
      price: req.body.price,
      discount: req.body.discount,
      discount_info: req.body.discount_info || listing.discount_info,
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

// @desc    Delete Mounjaro listing
// @route   DELETE /api/mounjaro/:id
// @access  Private
exports.deleteMounjaroListing = async (req, res, next) => {
  try {
    const listing = await Mounjaro.findById(req.params.id);

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

// @desc    Get Mounjaro price statistics by dosage
// @route   GET /api/mounjaro/stats/dosage
// @access  Public
exports.getMounjaroStats = async (req, res, next) => {
  try {
    const stats = await Mounjaro.aggregate([
      {
        $group: {
          _id: { medicine: '$medicine', dosage: '$dosage' },
          count: { $sum: 1 },
          avgPrice: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
          avgDiscount: { $avg: '$discount' }
        }
      },
      {
        $sort: { '_id.medicine': 1, '_id.dosage': 1 }
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
