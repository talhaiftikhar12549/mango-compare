const express = require('express');
const {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
    upvotePost,
    downvotePost,
} = require('../controllers/postsController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Routes
router
    .route('/')
    .get(getPosts)
    .post(protect, createPost);

router
    .route('/:id')
    .get(getPost)
    .put(protect, updatePost)
    .delete(protect, deletePost);

router.post('/:id/upvote', protect, upvotePost);
router.post('/:id/downvote', protect, downvotePost);

module.exports = router;
