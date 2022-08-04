const University = require("./../models/primary schema/universityModel");
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

exports.createUniversity = factory.createOne(University);

exports.getAllUniversities = factory.getAll(University);

exports.getUniversity = factory.getOne(University);

exports.updateUniversity = factory.updateOne(University);

exports.deleteUniversity = factory.deleteOne(University);
