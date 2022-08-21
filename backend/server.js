const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Configuring environment variables
dotenv.config({
  path: './.env',
});

// Require app
const app = require('./app');

// DB Configuration
const DB = process.env.DB;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected successfully');
  });

// PORT
const port = process.env.PORT || 3000;

// Connect to server
app.listen(port, () => {
  console.log(`Express app started in ${app.get('env')} mode on port ${port} `);
});
