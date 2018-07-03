const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = app => {
  app.post("api/users", async (req, res) => {
    const { username, password, email } = req.body;
    const user = await new User({
      username,
      password,
      email
    });
    user.save();
    res.send();
  });
}
