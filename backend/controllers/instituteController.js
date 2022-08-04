const Institute = require("./../models/primary schema/instituteModel");
const factory = require("./handlerFactory");

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.deleteMe = catchAsync(async (req, res, next) => {
  await Institute.findByIdAndUpdate(req.user._id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.createInstitute = factory.createOne(Institute);

exports.getAllInstitutes = factory.getAll(Institute);

exports.getInstitute = factory.getOne(Institute);

exports.updateInstitute = factory.updateOne(Institute);

exports.deleteInstitute = factory.deleteOne(Institute);
