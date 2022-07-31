const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// Requiring modules
const User = require('./models/primary schema/userModel');
const Student = require('./models/primary schema/studentModel');

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

// Testing routes
app.post('/user', async (req, res) => {
  const user = await User.create(req.body);

  if (!user) {
    console.log('User not created');
  }

  res.status(200).json({
    status: 'success',
    user,
  });
});

app.post('/student', async (req, res) => {
  const student = await Student.create(req.body);

  if (!student) {
    console.log('Student not created');
  }

  res.status(200).json({
    status: 'success',
    student,
  });
});

// Export app
module.exports = app;
