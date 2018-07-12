const express = require("express");
const passport = require("passport");

// Ending session

module.exports = app => {
  app.get("/api/logout", function(req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect("/signin");
  });
};
