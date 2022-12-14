const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

// Requiring modules

const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');
const industryRoutes = require('./routes/industryRoutes');
const instituteRoutes = require('./routes/instituteRoutes');
const universityRoutes = require('./routes/universityRoutes');
const alumniRoutes = require('./routes/alumniRoutes');
const coursesRoutes = require('./routes/coursesRoutes');

// Create express app
const app = express();

/* Global Middleware */
// Implement CORS
app.use(cors());
// Access-Control-Allow-Origin *

app.options('*', cors());

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
  next();
});

// Cookie Session
app.use(
  cookieSession({
    name: 'session',
    keys: ['sugamshiksha'],
    maxAge: 24 * 60 * 60 * 100,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

//API Routes
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/student', studentRoutes);
app.use('/api/v1/industry', industryRoutes);
app.use('/api/v1/institute', instituteRoutes);
app.use('/api/v1/university', universityRoutes);
app.use('/api/v1/alumni', alumniRoutes);
app.use('/api/v1/courses', coursesRoutes);

app.all('*', function (req, res, next) {
  // Other than defined route
  next(
    new AppError(
      `Can't find the requested url ${req.originalUrl} on this server!`,
      404
    )
  );
});

// 3.) Global Error Handling
app.use(globalErrorHandler);

// Export app
module.exports = app;
