const Alumni = require("../models/primary schema/alumniModel");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");
const factory = require("../controllers/handlerFactory");

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.createAlumni = factory.createOne(Alumni);

exports.getAllAlumni = factory.getAll(Alumni);

exports.getAlumni = factory.getOne(Alumni);

exports.updateAlumni = factory.updateOne(Alumni);

exports.deleteAlumni = factory.deleteOne(Alumni);
