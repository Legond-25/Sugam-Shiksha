const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// Requiring modules
const User = require('./models/primary schema/userModel');
const dbRead = require('./DB/index').getModels();

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

app.post('/primary', async (req, res) => {
  try {
    // const user = await User.create(req.body);
    const user = await User.create(req.body);

    if (!user) {
      throw new Error('User not created');
    }

    res.status(200).json({
      status: 'success',
      user,
    });
  } catch (e) {
    console.log(e.message);
  }
});

app.post('/secondary', async (req, res) => {
  try {
    // const user = await User.create(req.body);
    const university = await dbRead['University'].create(req.body);

    if (!university) {
      throw new Error('University not created');
    }

    res.status(200).json({
      status: 'success',
      university,
    });
  } catch (e) {
    console.log(e.message);
  }
});

// Export app
module.exports = app;
