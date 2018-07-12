const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const keys = require('./config/app_keys');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');
const app = express();


mongoose.connect(keys.mongoURI);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger("dev"));
app.use(cors())
app.use(bodyParser.json({ type: '*/*' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

router(app);

const PORT = 4000;
app.listen(PORT);
