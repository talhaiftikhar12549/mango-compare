const express = require('express');
const {
  getCommentsForPost,
  getComment,
  createComment,
  updateComment,
  deleteComment,
} = require('../controllers/commentsController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Nested route: /api/posts/:postId/comments
router
  .route('/post/:postId')
  .get(getCommentsForPost)
  .post(protect, createComment);

// Individual comment routes: /api/comments/:id
router
  .route('/:id')
  .get(getComment)
  .put(protect, updateComment)
  .delete(protect, deleteComment);

module.exports = router;
