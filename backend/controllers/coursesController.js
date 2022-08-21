const Courses = require('../models/coursesModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('../controllers/handlerFactory');

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.createCourses = factory.createOne(Courses);

exports.getAllCourses = factory.getAll(Courses);

exports.getCourses = factory.getOne(Courses);

exports.updateCourses = factory.updateOne(Courses);

exports.deleteCourses = factory.deleteOne(Courses);
