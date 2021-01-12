const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const patient = require('./api/patient');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.get('/', (req, res) => {
    res.json({
      message: "Greetings healthcare provider!!!",
      patients: ["Patient 1", "Patient 2", "Patient 3", "Patient 4" ]
    })
});

app.use('/api/v1/patients/', patient);

app.get('/vitals', (req, res) => {
  res.json({
    vitals: ["vitals 1", "vitals 2", "vitals 3", "vitals 4" ]
  })
});


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
  res.json({
    message:err.message,
    error: req.app.get('env') === 'development' ? err.stack : {}
  });
});

module.exports = app;
