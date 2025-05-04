const app = require('./app');
const { PORT } = require('./config/env');
const express = require('express');
const path = require('path');


// app.use('/public', express.static(path.join(__dirname, 'public/uploads')));
app.use('/api/mounjaro/uploads', express.static(path.join(__dirname, 'public', 'uploads'), {
  setHeaders: (res, path) => {
    res.set('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.set('Cross-Origin-Resource-Policy', 'cross-origin');
  }
}));


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});