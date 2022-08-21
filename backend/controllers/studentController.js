const Student = require('../models/studentModel');
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

exports.createStudent = factory.createOne(Student);

exports.getAllStudents = factory.getAll(Student);

exports.getStudent = factory.getOne(Student);

exports.updateStudent = factory.updateOne(Student);

exports.deleteStudent = factory.deleteOne(Student);
