const express = require("express");
const passport = require("passport");

// login page
module.exports = app => {
  app.get("/api/signin", function(req, res, next) {
    res.json({
      message: "success"
    });
  });

  app.post(
    "/api/signin",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/signin",
      failureFlash: true
    })
  );
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
