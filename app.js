const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { MONGODB_URI } = require('./config/env');
const errorHandler = require('./middleware/error');

// Import routes
const authRoutes = require('./routes/authroutes');
const mounjaroRoutes = require('./routes/mounjaroRoutes');
const discountRoutes = require('./routes/discountRoutes');
const wegovyRoutes = require('./routes/wegovyRoutes');
const contactRoutes = require('./routes/contactRoutes');
const blogsRoutes = require('./routes/blogsRoutes');
const postsRoutes = require('./routes/postsRoutes');
const commentsRoutes = require('./routes/commentsRoutes')


// Initialize Express app
const app = express();

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/medicine', mounjaroRoutes);
app.use('/api/discount', discountRoutes);
app.use('/api/wegovy', wegovyRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/blogs', blogsRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/comments', commentsRoutes);


// Error handling middleware
app.use(errorHandler);

module.exports = app;