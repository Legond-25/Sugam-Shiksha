const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// Requiring modules
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');
const universityRoutes = require('./routes/universityRoutes');
const instituteRoutes = require('./routes/instituteRoutes');
const industryRoutes = require('./routes/industryRoutes');

// Create express app
const app = express();

// Development Logging
if ((process.env.NODE_ENV = 'development')) {
  app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Test Middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

//API Routes

app.use('/api/v1/auth',userRoutes);
app.use('/api/v1/student',studentRoutes);
app.use('/api/v1/university',universityRoutes);
app.use('/api/v1/institute',instituteRoutes);
app.use('/api/v1/industry',industryRoutes);

// Export app
module.exports = app;
