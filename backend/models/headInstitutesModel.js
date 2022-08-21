const mongoose = require('mongoose');

const headSchema = mongoose.Schema({
  state: String,
  institution_name: String,
  head_name: String,
  mobile: Number,
  email: String,
});

const headModel = mongoose.model('head_institute', headSchema);

module.exports = headModel;
