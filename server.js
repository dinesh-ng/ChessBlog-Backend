const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//API routes
const tweetRoutes = require("./Routes/tweets.route");
//server instance
const app = express();

//DB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/chessblog", { useNewUrlParser: true })
  .then(
    () => console.log("MongoDb connected."),
    (err) => console.log("Connection Error: " + err)
  );

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
app.use("/api/tweets", tweetRoutes);

//Port Number
const port = process.env.PORT || 4000;
//Start Server
app.listen(port, () => console.log("Server listening on Port : " + port));
