const mongoose = require('mongoose');

// Creating student schema
const studentSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    academicInfo: {
      organizationType: {
        type: String,
        trim: true,
        required: [true, 'Please provide type of organization'],
      },
      organizationName: {
        type: String,
        trim: true,
        required: [true, 'Please provide name of organization'],
      },
      organizationAddress: {
        type: String,
        trim: true,
        required: [true, 'Please provide address of organization'],
      },
    },
    personalInfo: {
      gender: {
        type: String,
        trim: true,
        required: [true, 'Please provide your gender'],
      },
      dob: {
        type: Date,
        required: [true, 'Please provide your date of birth'],
      },
    },
    hobbies: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Document middleware - pre hook
studentSchema.pre(/^find/, async function (next) {
  this.populate({
    path: 'student',
    select: '-__v -passwordChangedAt -user -photo',
  });

  next();
});

// Creating student model
const Student = mongoose.model('Student', studentSchema);

// Exporting student model
module.exports = Student;
