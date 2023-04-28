const express = require("express");
const app = express();
const router = express.Router();

//Tweet Model
const TweetModel = require("../Models/Tweet.model");

//Get all tweets
router.route("/").get(async (req, res) => {
  try {
    const tweets = await TweetModel.find({});
    res.json(tweets);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

//Post new tweet
router.route("/").post(async (req, res) => {
  try {
    const { tweet, createdAt, createdBy } = req.body;
    const newTweet = new TweetModel({ tweet, createdAt, createdBy });
    await newTweet.save().then(() => console.log("New tweet added."));
    res.json(newTweet);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

//Delete tweet
router.route("/:id").delete(async (req, res) => {
  try {
    const tweet = await TweetModel.findById({ _id: req.params.id });
    if (!tweet) return res.status(404).json({ error: "Tweet Not Found" });
    await TweetModel.deleteOne({ _id: req.params.id });
    res.json({ message: "Tweet Removed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});
module.exports = router;
