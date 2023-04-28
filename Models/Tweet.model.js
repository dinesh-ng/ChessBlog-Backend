const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  tweet: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  createdBy: {
    type: String,
    default: "Anonymous",
    required: true,
  },
});

module.exports = mongoose.model("Tweet", tweetSchema);
