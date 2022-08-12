const mongoose = require("mongoose");

const aluQueSchema = new mongoose.Schema({
  Que1: {
    question: { type: String },
    option: [{ type: String }],
    answer: [{ type: String }],
  },

  Que2: {
    question: { type: String },
    option: [{ type: String }],
    answer: [{ type: Number }],
  },

  Que3: {
    question: { type: String },
    option: [{ type: String }],
    answer: [{ type: String }],
  },

  Que4: {
    question: { type: String },
    option: [{ type: String }],
    answer: [{ type: String }],
  },

  Que5: {
    question: { type: String },
    option: [{ type: String }],
    answer: [{ type: String }],
  },

  Que6: {
    question: { type: String },
    // option: [{type:String}],
    answer: [{ type: String }],
  },

  Que7: {
    question: { type: String },
    // option: [{type: String}],
    answer: [{ type: String }],
  },
});

const AlumniQuestion = mongoose.model("AlumniQuestion", aluQueSchema);

module.exports = AlumniQuestion;
