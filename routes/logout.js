const express = require("express");
const passport = require("passport");

// Ending session

module.exports = app => {
  app.get("/api/logout", function(req, res, next) {
    console.log("try logout", req.slession)
    req.logout();
    req.session.destroy();
    res.json({
      message: "Logged out"
    });
  });
};
