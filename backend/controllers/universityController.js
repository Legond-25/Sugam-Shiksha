const University = require("./../models/primary schema/universityModel");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");
const factory = require("./handlerFactory");

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.deleteMe = catchAsync(async (req, res, next) => {
  await University.findByIdAndUpdate(req.user._id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.createUniversity = catchAsync(async (req, res, next) => {
  const newUniversity = await University.create(req.body);

  res.status(200).json({
    status: "success",
    data: {
      data: newUniversity,
    },
  });
});

// exports.createUniversity = factory.createOne(University);

exports.getAllUniversities = factory.getAll(University);

exports.getUniversity = factory.getOne(University);

exports.updateUniversity = factory.updateOne(University);

exports.deleteUniversity = factory.deleteOne(University);
