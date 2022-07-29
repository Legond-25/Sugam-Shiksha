const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = (config) => {
  let options = {};

  if (process.env.NODE_ENV === 'production') {
    options = {
      server: { poolSize: 10 },
      replset: { poolSize: 10 },
    };

    console.log('Connecting to mongo with options', options);
  }

  const conn = mongoose.createConnection(config.db_read, options);

  conn.on('connected', function () {
    console.log(
      '[2]Mongoose connection open to ' + config.db_read.split('/').pop()
    );
  });

  return conn;
};
