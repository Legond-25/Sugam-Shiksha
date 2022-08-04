const Industry = require("./../models/primary schema/industryModel");
const factory = require("./handlerFactory");

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.deleteMe = catchAsync(async (req, res, next) => {
  await Industry.findByIdAndUpdate(req.user._id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.createIndustry = factory.createOne(Industry);

exports.getAllIndustries = factory.getAll(Industry);

exports.getIndustry = factory.getOne(Industry);

exports.updateIndustry = factory.updateOne(Industry);

exports.deleteIndustry = factory.deleteOne(Industry);
