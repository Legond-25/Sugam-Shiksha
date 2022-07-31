const mongoose = require('mongoose');

// Create university Schema
const universitySchema = mongoose.Schema(
  {
    universityAdmin: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    universityName: {
      type: String,
      required: [true, 'Please provide the name of university'],
    },
    universityAddress: {
      type: String,
      trim: true,
      required: [true, 'Please provide the address of university'],
    },
    universityType: {
      type: String,
      required: [true, 'Please provide the type of university'],
      enum: {
        values: [
          'Central University',
          'State University',
          'Deemed University',
          'Institutes Under National Importance',
        ],
        message: 'The value {VALUE} is not supported',
      },
    },
    universityCode: {
      type: Number,
      unique: true,
      required: [true, 'Please provide the university code'],
      trim: true,
    },
    universityHead: {
      type: String,
      trim: true,
      required: [true, 'Please provide the name of head of university'],
    },
    noAffiliatedInstitutes: {
      type: Number,
      trim: true,
      required: [true, 'Please provide the no. of affliated institutes'],
    },
    instituteInfo: {
      institutes: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Institute',
        },
      ],
      noOfInstitutes: Number,
    },
    approvalDocs: [
      {
        type: String,
        required: [true, 'Please provide the institute approval docs'],
      },
    ],
    departmentsInfo: {
      noOfDepartments: {
        type: Number,
        trim: true,
        required: [true, 'Please provide the number of departments'],
      },
      nameOfDepartments: [
        {
          type: String,
          trim: true,
          required: [true, 'Please provide the name of departments'],
        },
      ],
      nameOfHods: [
        {
          type: String,
          trim: true,
          required: [true, "Please provide the name of HOD's"],
        },
      ],
      syllabusOfDepartments: [
        {
          type: String,
          required: [true, 'Please provide the syllabus of departments'],
        },
      ],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Query middleware
universitySchema.pre(/^find/, function (next) {
  this.populate({
    path: 'universityAdmin',
    select: '-__v -passwordChangedAt -user -photo',
  }).populate({
    path: 'institutes',
    select: 'instituteName instituteCode',
  });

  next();
});

// Creating university model
const University = mongoose.model('University', universitySchema);

// Exporting university model
module.exports = University;
