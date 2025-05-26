const Posts = require('../models/Posts');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
exports.getPosts = async (req, res, next) => {
  try {
    let query;
    let queryStr = JSON.stringify(req.query);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

    query = Posts.find(JSON.parse(queryStr)).populate('author', 'name');

    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Posts.countDocuments();

    query = query.skip(startIndex).limit(limit);

    const posts = await query;

    const pagination = {};
    if (endIndex < total) {
      pagination.next = { page: page + 1, limit };
    }
    if (startIndex > 0) {
      pagination.prev = { page: page - 1, limit };
    }

    res.status(200).json({
      success: true,
      count: posts.length,
      pagination,
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get a single post
// @route   GET /api/posts/:id
// @access  Public
exports.getPost = async (req, res, next) => {
  try {
    const post = await Posts.findById(req.params.id).populate('author', 'name');

    if (!post) {
      return next(new ErrorResponse(`Post not found with ID: ${req.params.id}`, 404));
    }

    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create a new post
// @route   POST /api/posts
// @access  Private
exports.createPost = async (req, res, next) => {
  try {
    const { title, body, tags } = req.body;

    const post = await Posts.create({
      title,
      body,
      tags,
      author: req.user.id, // Assumes you're using authentication middleware
    });

    res.status(201).json({
      success: true,
      data: post,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update a post
// @route   PUT /api/posts/:id
// @access  Private
exports.updatePost = async (req, res, next) => {
  try {
    let post = await Posts.findById(req.params.id);

    if (!post) {
      return next(new ErrorResponse(`Post not found with ID: ${req.params.id}`, 404));
    }

    // Optional: check if the user is the author before allowing update
    if (post.author.toString() !== req.user.id) {
      return next(new ErrorResponse(`Not authorized to update this post`, 403));
    }

    post = await Posts.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete a post
// @route   DELETE /api/posts/:id
// @access  Private
exports.deletePost = async (req, res, next) => {
  try {
    const post = await Posts.findById(req.params.id);

    if (!post) {
      return next(new ErrorResponse(`Post not found with ID: ${req.params.id}`, 404));
    }

    // Optional: check if the user is the author
    if (post.author.toString() !== req.user.id) {
      return next(new ErrorResponse(`Not authorized to delete this post`, 403));
    }

    await post.deleteOne();

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Upvote a post
// @route   POST /api/posts/:id/upvote
// @access  Private
exports.upvotePost = async (req, res, next) => {
  try {
    const post = await Posts.findById(req.params.id);

    if (!post) {
      return next(new ErrorResponse('Post not found', 404));
    }

    // Remove downvote if user had downvoted before
    post.downvotes = post.downvotes.filter(
      (userId) => userId.toString() !== req.user.id
    );

    // If already upvoted, remove it (toggle)
    const hasUpvoted = post.upvotes.includes(req.user.id);
    if (hasUpvoted) {
      post.upvotes = post.upvotes.filter(
        (userId) => userId.toString() !== req.user.id
      );
    } else {
      post.upvotes.push(req.user.id);
    }

    await post.save();

    res.status(200).json({
      success: true,
      upvotes: post.upvotes.length,
      downvotes: post.downvotes.length,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Downvote a post
// @route   POST /api/posts/:id/downvote
// @access  Private
exports.downvotePost = async (req, res, next) => {
  try {
    const post = await Posts.findById(req.params.id);

    if (!post) {
      return next(new ErrorResponse('Post not found', 404));
    }

    // Remove upvote if user had upvoted before
    post.upvotes = post.upvotes.filter(
      (userId) => userId.toString() !== req.user.id
    );

    // If already downvoted, remove it (toggle)
    const hasDownvoted = post.downvotes.includes(req.user.id);
    if (hasDownvoted) {
      post.downvotes = post.downvotes.filter(
        (userId) => userId.toString() !== req.user.id
      );
    } else {
      post.downvotes.push(req.user.id);
    }

    await post.save();

    res.status(200).json({
      success: true,
      upvotes: post.upvotes.length,
      downvotes: post.downvotes.length,
    });
  } catch (err) {
    next(err);
  }
};

