const Institute = require('./../models/primary schema/instituteModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

// Get Institute of Current User
exports.getInstituteOfUser = catchAsync(async (req, res, next) => {
  const instituteAdmin = req.user.id;

  if (!instituteAdmin) {
    return next(new AppError('You are not allowed to access this page', 400));
  }

  const instituteData = await Institute.findOne({ instituteAdmin });

  if (!instituteData) {
    return next(
      new AppError('A document with that ID could not be found', 404)
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: instituteData,
    },
  });
});

// Add Department
exports.addDepartment = catchAsync(async (req, res, next) => {
  const id = req.params.instituteId;

  if (!id) {
    return next(new AppError('You are not allowed to access this page', 400));
  }

  const oldInstituteData = await Institute.findById(id);
  const oldDepartmentInfo = [...oldInstituteData.departmentsInfo];

  const updatedInstituteData = await Institute.updateOne(
    { _id: id },
    {
      departmentsInfo: [...oldDepartmentInfo, req.body],
    }
  );

  res.status(200).json({
    status: 'success',
    data: {
      data: updatedInstituteData,
    },
  });
});

// CRUD Operations
exports.getInstitute = factory.getOne(Institute);
exports.getAllInstitutes = factory.getAll(Institute);

exports.createInstitute = factory.createOne(Institute);
exports.updateInstitute = factory.updateOne(Institute);
exports.deleteInstitute = factory.deleteOne(Institute);
