const mongoose = require('mongoose');

// Creating industry schema
const industrySchema = mongoose.Schema(
  {
    companyAdmin: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    domain: {
      type: String,
      trim: true,
    },
    companyName: {
      type: String,
      trim: true,
      unique: true,
      // required: [true, 'Please provide the name of company'],
    },
    companyAddress: {
      type: String,
      trim: true,
      // required: [true, 'Please provide the address of company'],
    },
    specialization: {
      type: String,
      trim: true,
      // required: [true, 'Please provide the company specialization'],
    },
    idCard: {
      type: String,
      // required: [true, 'Please provide id card for authentication purposes'],
    },
    license: {
      type: String,
      // required: [true, 'Please provide the company registration documents'],
    },
    experience: {
      type: Number,
      trim: true,
      // required: [true, 'Please provide your years of experience'],
    },
    bot: [
      {
        que: String,
        options: [String],
        answer: [String],
      },
    ],
    formFilled: {
      basic: {
        type: Boolean,
        default: false,
      },
      detailed: {
        type: Boolean,
        default: false,
      },
      bot: {
        type: Boolean,
        default: false,
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Query middleware -pre hook
industrySchema.pre(/^find/, function (next) {
  this.populate({
    path: 'companyAdmin',
    select: '-__v -passwordChangedAt -user -photo',
  });

  next();
});

// Creating industry model
const Industry = mongoose.model('Industry', industrySchema);

// Exporting industry model
module.exports = Industry;
