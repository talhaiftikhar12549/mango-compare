const app = require('./app');
const { PORT } = require('./config/env');
const express = require('express');
const path = require('path');


// app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});