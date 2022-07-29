const dotenv = require('dotenv');

// Configuring environment variables
dotenv.config({
  path: './.env',
});

// Require app
const app = require('./app');

// DB Configuration
const DB_PRIMARY = process.env.DB_PRIMARY;
const DB_SECONDARY = process.env.DB_SECONDARY;

const config = {
  dbConfig: {
    db: DB_PRIMARY,
    db_read: DB_SECONDARY,
  },
};

require('./DB/index').createConnection(app, config);

// PORT
const port = process.env.PORT || 3000;

// Connect to server
app.listen(port, () => {
  console.log(`Express app started in ${app.get('env')} mode on port ${port} `);
});
