const Industry = require('./../models/industryModel');
const IndustryQuestionModel = require('./../models/industryQuestionModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const uuid = require('uuid').v4;
const path = require('path');

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

// Creating new s3 instance
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

// Multer Configuration
const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'ss-textract-async-process',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const suffix = path.extname(file.originalname);
      cb(null, `Industry/Icards/${uuid()}${suffix}`);
    },
  }),
});

exports.uploadBasicS3 = upload.single('identityCard');

exports.createBasicForm = catchAsync(async (req, res, next) => {
  const file = req.file.location;

  const domain = req.body.domain;
  const exp = req.body.experience;
  const basicStatus = req.body.formFilled;

  const data = {
    idCard: file,
    domain: domain,
    experience: exp,
    formFilled: { basic: basicStatus },
  };

  const updatedIndustryData = await Industry.findByIdAndUpdate(
    req.params.id,
    data
  );

  res.status(200).json({
    status: 'success',
    data: updatedIndustryData,
  });
});

const Licupload = multer({
  storage: multerS3({
    s3,
    bucket: 'ss-textract-async-process',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const suffix = path.extname(file.originalname);
      cb(null, `Industry/Licenses/${uuid()}${suffix}`);
    },
  }),
});

exports.uploadDetailS3 = Licupload.single('license');

exports.createDetailForm = catchAsync(async (req, res, next) => {
  const file = req.file.location;
  const companyName = req.body.companyName;
  const companyAddress = req.body.companyAddress;
  const specialization = req.body.specialization;
  const detailStatus = req.body.formFilled;

  const data = {
    companyName: companyName,
    companyAddress: companyAddress,
    specialization: specialization,
    license: file,
    formFilled: { basic: true, detailed: detailStatus },
  };

  const updatedIndustryDetailData = await Industry.findByIdAndUpdate(
    req.params.id,
    data
  );

  res.status(200).json({
    status: 'success',
    data: updatedIndustryDetailData,
  });
});

exports.getBot = catchAsync(async (req, res, next) => {
  const bot = await IndustryQuestionModel.find();

  if (!bot) {
    return next(new AppError('An error ocurred while getting the bot', 400));
  }

  res.status(200).json({
    status: 'success',
    data: bot,
  });
});

// exports.getBotAnswers = catchAsync(async (req, res, next) => {
//   const industryAdmin = req.params.id;

//   const data = req.body;

//   const industry = await Industry.findByIdAndUpdate(industryAdmin);
// });

exports.createIndustry = factory.createOne(Industry);

exports.getAllIndustries = factory.getAll(Industry);

exports.getIndustry = factory.getOne(Industry);

exports.updateIndustry = factory.updateOne(Industry);

exports.deleteIndustry = factory.deleteOne(Industry);
