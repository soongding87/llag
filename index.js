const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const mongoose = require("mongoose");
const keys = require("./config/app_keys");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// authentication libraries
const bcrypt = require("bcrypt");
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
//

require("./models/User");

mongoose.connect(keys.mongoURI);
mongoose.Promise = global.Promise;

const User = mongoose.model("User");

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// session
const MongoDBStore = require("connect-mongodb-session")(session);

const dbStore = new MongoDBStore({
  uri: keys.mongoURI,
  collection: "mySessions"
});

dbStore.on("error", error => {
  console.log(error);
});

app.use(
  session({
    secret: "supersecret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
    store: dbStore
  })
);
app.use(bodyParser.urlencoded({ extended: false }));

// DB Session

app.use(passport.initialize());
app.use(passport.session());

// app.use(function(req, res, next) {
//   res.locals.isAuthenticated = req.isAuthenticated();
//   res.locals.user = req.user;
//   next();
// });

// controllers

require("./routes/users")(app);
require("./routes/signIn")(app);

// app.use('/api/logout', logout);

// passport local strategy

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      // const hash = user.password;
      // bcrypt.compare(password, hash, function(err, res) {
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
      // });
    });
  })
);

// passport serializer

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

const PORT = 4000;
app.listen(PORT);
