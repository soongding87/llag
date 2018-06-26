const express = require("express");
const router = express.Router();
const passport = require("passport");

// login page

router.get("/", function(req, res, next) {
  res.json({
    message: "success"
  });
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/signup",
    failureRedirect: "/api/login"
  })
);

module.exports = router;
