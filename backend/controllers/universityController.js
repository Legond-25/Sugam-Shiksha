const AppError = require('../utils/appError');
const University = require('./../models/primary schema/universityModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createUniversity = catchAsync(async (req, res, next) => {
  req.body.universityAdmin = req.user.id;

  const newUniversity = await University.create(req.body);

  res.status(200).json({
    status: 'success',
    data: {
      data: newUniversity,
    },
  });
});

exports.getUniversityOfUser = catchAsync(async (req, res, next) => {
  const universityAdmin = req.user.id;

  if (!universityAdmin) {
    return next(new AppError('You are not allowed to access this page', 400));
  }

  const universityData = await University.findOne({ universityAdmin });

  if (!universityData) {
    return next(
      new AppError('A document with that ID could not be found', 404)
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: universityData,
    },
  });
});

// exports.createUniversity = factory.createOne(University);

exports.getAllUniversities = factory.getAll(University);

exports.getUniversity = factory.getOne(University);

exports.updateUniversity = factory.updateOne(University);

exports.deleteUniversity = factory.deleteOne(University);
