const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");

router.post("/", async (req, res) => {
  const { username, password, email } = req.body;
  const user = await new User({
    username,
    password,
    email
  });
  user.save();
  res.send();
});

module.exports = router;
