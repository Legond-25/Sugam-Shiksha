const AluQue = require("../models/primary schema/aluQueModel");
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

exports.createAluQue = factory.createOne(AluQue);

exports.getAllAluQue = factory.getAll(AluQue);

exports.getAluQue = factory.getOne(AluQue);

exports.updateAluQue = factory.updateOne(AluQue);

exports.deleteAluQue = factory.deleteOne(AluQue);
