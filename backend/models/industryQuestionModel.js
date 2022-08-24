const mongoose = require('mongoose');

const indQueSchema = mongoose.Schema({
  que: String,
  options: [String],
  type: String,
  name: String,
  rate: Boolean,
});

const indQueModel = mongoose.model('industry_question', indQueSchema);

module.exports = indQueModel;
