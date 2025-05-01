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
app.use('/api/mounjaro', mounjaroRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;