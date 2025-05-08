const Discount = require('../models/Discount');
const ErrorResponse = require('../utils/errorResponse');
const Medicine = require('../models/Mounjaro');

// @desc    Get all Discount listings
// @route   GET /api/mounjaro
// @access  Public
exports.getDiscountListings = async (req, res, next) => {
  try {
    let query;
    let queryStr = JSON.stringify(req.query);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
    
    query = Discount.find(JSON.parse(queryStr));

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
    const total = await Discount.countDocuments();

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

// @desc    Get single Discount listing
// @route   GET /api/mounjaro/:id
// @access  Public
exports.getDiscountListing = async (req, res, next) => {
  try {
    const listing = await Discount.findById(req.params.id);

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

// @desc    Create new Discount listing
// @route   POST /api/mounjaro
// @access  Private
exports.createDiscountListing = async (req, res, next) => {
    try {
      const { medicineId, discount_statement, discount_code } = req.body;
  
      const discount = await Discount.create({
        medicineId, // Store reference to medicine
        discount_statement,
        discount_code,
        applied
      });
  
      const updatedMedicine = await Medicine.findByIdAndUpdate(
        medicineId,
        {
          discount_info: {
            discount_statement,
            discount_code,
            applied
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
  
      if (!updatedMedicine) {
        return next(new ErrorResponse(`Medicine not found with ID: ${medicineId}`, 404));
      }
  
      res.status(201).json({
        success: true,
        message: 'Discount created and medicine updated',
        data: {
          discount,
          updatedMedicine,
        },
      });
    } catch (err) {
      next(err);
    }
  };

// @desc    Update Discount listing
// @route   PUT /api/mounjaro/:id
// @access  Private
exports.updateDiscountListing = async (req, res, next) => {
  try {
    let listing = await Discount.findById(req.params.id);

    if (!listing) {
      return next(
        new ErrorResponse(`Listing not found with id of ${req.params.id}`, 404)
      );
    }


    listing = await Discount.findByIdAndUpdate(
      req.params.id,
      {
       pharmacyID: req._id,
      discount_statement: req.body.discount_statement,
      discount_code: req.body.discount_code,
      applied: req.body.applied
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

// @desc    Delete Discount listing
// @route   DELETE /api/mounjaro/:id
// @access  Private
exports.deleteDiscountListing = async (req, res, next) => {
  try {
    const listing = await Discount.findById(req.params.id);

    if (!listing) {
      return next(
        new ErrorResponse(`Listing not found with id of ${req.params.id}`, 404)
      );
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
