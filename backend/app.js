const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
<<<<<<< HEAD

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

=======
require('dotenv').config();

// Database setup
const mongoose = require('mongoose');
const mongoDB = process.env.DB_STRING

mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));

// Routes
const gameRouter = require('./routes/game');

>>>>>>> 3bf67b160aa9cb594d925a094e882ee8896ceb00
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', gameRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
