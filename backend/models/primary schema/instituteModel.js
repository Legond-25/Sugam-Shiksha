const mongoose = require('mongoose');

// Create institute schema
const instituteSchema = mongoose.Schema(
  {
    university: {
      type: mongoose.Schema.ObjectId,
      ref: 'University',
    },
    instituteAdmin: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    instituteName: {
      type: String,
      unique: true,
      required: [true, 'Please provide the name of institute'],
    },
    instituteAddress: {
      type: String,
      trim: true,
      required: [true, 'Please provide the address of institute'],
    },
    instituteCode: {
      type: Number,
      unique: true,
      required: [true, 'Please provide the institute code'],
    },
    instituteType: {
      type: String,
      required: [true, 'Please provide the type of institute'],
      enum: {
        values: ['government', 'non-government'],
        message: 'The value {VALUE} is not supported',
      },
    },
    autonomyStatus: {
      type: Boolean,
      required: [true, 'Please provide the institute autonomy status'],
    },
    fundingStatus: {
      type: String,
      required: [true, 'Please provide the institute funding status'],
      enum: {
        values: ['aided', 'un-aided'],
        message: 'The value {VALUE} is not supported',
      },
    },
    principal: {
      type: String,
      trim: true,
      required: [true, 'Please provide the name of principal'],
    },
    departmentsInfo: {
      noOfDepartments: {
        type: Number,
        required: [true, 'Please provide the no. of departments'],
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
    },
    approvalDocs: [
      {
        type: String,
        required: [true, 'Please provide the institute approval docs'],
      },
    ],
    placementDocs: [
      {
        type: String,
        required: [true, 'Please provide the placement statistics'],
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Query middleware -pre hook
instituteSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'instituteAdmin',
    select: '-__v -passwordChangedAt -user -photo',
  }).populate({
    path: 'university',
    select: 'universityName universityCode',
  });

  next();
});

// Create institute model
const Institute = mongoose.model('Institute', instituteSchema);

// Exporting institute model
module.exports = Institute;
