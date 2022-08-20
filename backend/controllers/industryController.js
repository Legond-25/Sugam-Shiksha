const Industry = require('./../models/primary schema/industryModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

// Get Industry of Current User
exports.getIndustryOfUser = catchAsync(async (req, res, next) => {
  const industryAdmin = req.user.id;

  if (!industryAdmin) {
    return next(new AppError('You are not allowed to access this page', 400));
  }

  const industryData = await Industry.findOne({ industryAdmin });

  if (!industryData) {
    return next(
      new AppError('A document with that ID could not be found', 404)
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: industryData,
    },
  });
});

exports.createBasicForm = catchAsync(async (req, res, next) => {});

exports.createIndustry = factory.createOne(Industry);

exports.getAllIndustries = factory.getAll(Industry);

exports.getIndustry = factory.getOne(Industry);

exports.updateIndustry = factory.updateOne(Industry);

exports.deleteIndustry = factory.deleteOne(Industry);
