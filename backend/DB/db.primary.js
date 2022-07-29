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

  mongoose.connect(config.db, options, (err) => {
    if (err) console.log('[1]MongoDB connect Error:', err);
  });

  mongoose.connection.on('connected', function () {
    console.log('[1]Mongoose connection open to ' + config.db.split('/').pop());
  });
};
