// scripts/updateUpvotesCount.js
const mongoose = require('mongoose');
const Posts = require('../models/Posts'); // Adjust path if needed
require('dotenv').config(); // Only if you're using .env to connect

async function updateUpvoteCounts() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const posts = await Posts.find({});
    for (const post of posts) {
      post.upvoteCount = post.upvotes.length;
      await post.save();
      console.log(`Updated post ${post._id}: ${post.upvoteCount} upvotes`);
    }

    console.log('✅ All upvotesCount fields updated.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

updateUpvoteCounts();
