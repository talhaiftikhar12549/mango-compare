const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Create uploads directory if it doesn't exist
// const uploadDir = path.join(__dirname, '../public/uploads');

// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Set storage engine
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname).toLowerCase();
//     cb(null, `${uuidv4()}${ext}`); // Generate UUID filename
//   }
// });


// // File filter
// const fileFilter = (req, file, cb) => {
//   const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  
//   if (allowedMimeTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error('Invalid file type. Only JPEG, PNG, GIF, and WEBP images are allowed.'), false);
//   }
// };

// // File size limit (5MB)
// const limits = {
//   fileSize: 5 * 1024 * 1024
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits
// });

const upload = multer({ dest: 'uploads/' })

module.exports = upload;