const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    course: {
      level: { type: String },
      no_of_lessons: { type: Number },
      time: { type: String },
      imageCover: { type: String },
      courseName: { type: String },
      ratings: {
        type: Number,
        default: 3,
        min: [1, "The rating must be above 1.0"],
        max: [5, "The rating must be below 5.0"],
      },
      noOfCourses: { type: Number },
      logo: { type: String },
      noOfReviews: { type: Number },
      price: { type: Number },
      noOfStudents: { type: Number },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Courses = mongoose.model("Courses", courseSchema);

module.exports = Courses;
