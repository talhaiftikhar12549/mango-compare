const Blog = require('../models/Blog');
const ErrorResponse = require('../utils/errorResponse');
const path = require('path');
const fs = require('fs');

// @desc    Get all blog posts
// @route   GET /api/blogs
// @access  Public
exports.getAllBlogs = async (req, res, next) => {
    try {
        const {
            page = 1,
            limit = 10,
            sort = '-createdAt',
            tags,
            categories,
            status,
            search,
        } = req.query;

        const queryObj = {};

        // Filter by status
        if (status) {
            queryObj.status = status;
        }

        // Filter by tags
        if (tags) {
            const tagArray = tags.split(',').map(tag => tag.trim());
            queryObj.tags = { $in: tagArray };
        }

        // Filter by categories
        if (categories) {
            const catArray = categories.split(',').map(cat => cat.trim());
            queryObj.categories = { $in: catArray };
        }

        // Full-text search (title, content, excerpt)
        if (search) {
            queryObj.$or = [
                { title: { $regex: search, $options: 'i' } },
                { excerpt: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } },
            ];
        }

        const skip = (parseInt(page) - 1) * parseInt(limit);

        const total = await Blog.countDocuments(queryObj);

        const blogs = await Blog.find(queryObj)
            .sort(sort.split(',').join(' '))
            .skip(skip)
            .limit(parseInt(limit))
            .populate('author', 'name email');

        const pagination = {};
        if (skip + blogs.length < total) {
            pagination.next = { page: parseInt(page) + 1, limit: parseInt(limit) };
        }
        if (skip > 0) {
            pagination.prev = { page: parseInt(page) - 1, limit: parseInt(limit) };
        }

        res.status(200).json({
            success: true,
            count: blogs.length,
            pagination,
            data: blogs,
        });
    } catch (err) {
        next(err);
    }
};


// @desc    Get a single blog post by ID or slug
// @route   GET /api/blogs/:idOrSlug
// @access  Public
exports.getSingleBlog = async (req, res, next) => {
    try {
        const { idOrSlug } = req.params;
        const blog = await Blog.findOne(
            idOrSlug.match(/^[0-9a-fA-F]{24}$/) ? { _id: idOrSlug } : { slug: idOrSlug }
        ).populate('author', 'name email');

        if (!blog) {
            return next(new ErrorResponse(`Blog not found`, 404));
        }

        // Increment views
        blog.views += 1;
        await blog.save();

        res.status(200).json({
            success: true,
            data: blog,
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Create a new blog post
// @route   POST /api/blogs
// @access  Private
exports.createBlog = async (req, res, next) => {
    try {
        let featuredImage = '';
        if (req.file) {
            featuredImage = req.file.path;
        }

        const blog = await Blog.create({
            ...req.body,
            featuredImage,
            author: req.user._id, // assume user is set by auth middleware
        });

        res.status(201).json({
            success: true,
            data: blog,
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Update a blog post
// @route   PUT /api/blogs/:id
// @access  Private
exports.updateBlog = async (req, res, next) => {
    try {
        let blog = await Blog.findById(req.params.id);

        if (!blog) {
            return next(new ErrorResponse(`Blog not found`, 404));
        }

        if (req.file) {
            if (blog.featuredImage) {
                const oldImagePath = path.join(__dirname, '..', blog.featuredImage);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
            req.body.featuredImage = req.file.path;
        }

        blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            success: true,
            data: blog,
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Delete a blog post
// @route   DELETE /api/blogs/:id
// @access  Private
exports.deleteBlog = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return next(new ErrorResponse(`Blog not found`, 404));
        }

        if (blog.featuredImage) {
            const imagePath = path.join(__dirname, '..', blog.featuredImage);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await blog.deleteOne();

        res.status(200).json({
            success: true,
            data: {},
        });
    } catch (err) {
        next(err);
    }
};
