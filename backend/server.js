const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Configuring environment variables
dotenv.config({
  path: './.env',
});

// Require app
const app = require('./app');

// Database Connection
const DB_PRIMARY = process.env.DB_PRIMARY;
const DB_SECONDARY = process.env.DB_SECONDARY;

mongoose
  .connect(DB_PRIMARY, {
    maxPoolSize: 10,
    minPoolSize: 5,
  })
  .then(() => {
    console.log('Primary database connection successful');
  })
  .catch((e) => {
    console.log(e.message);
  });

mongoose.secondary = mongoose.createConnection(DB_SECONDARY, {
  maxPoolSize: 10,
  minPoolSize: 5,
});

module.exports = mongoose;

// PORT
const port = process.env.PORT || 3000;

// Connect to server
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
