const mongoose = require('mongoose');

const indQueSchema = mongoose.Schema({
  que: String,
  options: [String],
});

const indQueModel = mongoose.model('industry_question', indQueSchema);

module.exports = indQueModel;
