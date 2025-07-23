const mongoose = require('mongoose');
const Mounjaro = require('../models/Mounjaro');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

(async () => {
  try {
    const result = await Mounjaro.updateMany(
      { tp_link: { $exists: false } },
      { $set: { tp_link: '' } }
    );

    console.log(`Updated ${result.modifiedCount} documents to add "tp_link".`);
  } catch (err) {
    console.error('Error updating documents:', err);
  } finally {
    await mongoose.disconnect();
  }
})();