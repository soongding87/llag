const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("../config/app_keys");
require("../models/User");
const User = mongoose.model("User");
mongoose.connect(keys.mongoURI);
mongoose.Promise = global.Promise;

// login page
module.exports = app => {
  app.get("/api/signin", function(req, res, next) {
    if (req.session.passport.user) {
      const current_user = req.session.passport.user;
      User.findById(current_user).then(user => {
        res.json({
          session: user
        });
      });
    }
  });

  app.post(
    "/api/signin",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/signin",
      failureFlash: true
    })
  );
};
