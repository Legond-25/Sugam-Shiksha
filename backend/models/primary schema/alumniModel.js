const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema(
  {
    alumni: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    instituteName: {
      type: String,
      trim: true,
      // required: [true, "Please provide your institute name"],
    },
    companyName: {
      type: String,
      trim: true,
      // required: [true, "Please provide your company name"],
    },
    experiance: {
      type: Number,
      trim: true,
      // required: [true, "Please provide your years of experiance"],
    },
    domain: {
      type: String,
      trim: true,
      // required: [true, "Please provide your work domain"],
    },
  },

  {
    timestamp: true,
    toJSON: { virtuals: true },
    toObjects: { virtuals: true },
  }
);

const Alumni = mongoose.model('Alumni', alumniSchema);

module.exports = Alumni;
