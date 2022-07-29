const mongoose = require('mongoose');

// Creating university schema
const universitySchema = new mongoose.Schema(
  {
    universityName: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Please provide name of university'],
    },
    universityType: {
      type: String,
      trim: true,
      required: [true, 'Please provide the type of university'],
      enum: {
        values: [
          'Central University',
          'State University',
          'Deemed University',
          'Institutes Under National Importance',
        ],
        message: '{VALUE} is not supported',
      },
    },
    universityCode: {
      type: Number,
      unique: true,
      required: [true, 'Please provide the university code'],
      trim: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Exporting university model
module.exports = universitySchema;
