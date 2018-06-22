const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = mongoose.model("User");

router.post("/", async (req, res) => {
  const { username, password, email } = req.body;
  const user = new User({
    username,
    password,
    email
  });
  user.save();
  res.send();
});

// passport serializer

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = router;
