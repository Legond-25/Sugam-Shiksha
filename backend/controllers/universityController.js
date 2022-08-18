const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const uuid = require("uuid").v4;

const AppError = require("../utils/appError");
const University = require("./../models/primary schema/universityModel");
const catchAsync = require("./../utils/catchAsync");
const factory = require("./handlerFactory");

exports.createUniversity = catchAsync(async (req, res, next) => {
  req.body.universityAdmin = req.user.id;

  const newUniversity = await University.create(req.body);

  res.status(200).json({
    status: "success",
    data: {
      data: newUniversity,
    },
  });
});

exports.getUniversityOfUser = catchAsync(async (req, res, next) => {
  const universityAdmin = req.user.id;

  if (!universityAdmin) {
    return next(new AppError("You are not allowed to access this page", 400));
  }

  const universityData = await University.findOne({ universityAdmin });

  if (!universityData) {
    return next(
      new AppError("A document with that ID could not be found", 404)
    );
  }

  res.status(200).json({
    status: "success",
    data: {
      data: universityData,
    },
  });
});

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: "sih-project",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const suffix = path.extname(file.originalname);
      const prefix = "FirstYear";
      cb(null, `${prefix}-${uuid()}${suffix}`);
    },
  }),
});

exports.uploadSyllabus =
  (upload.array("syllabus", 4),
  async (req, res, next) => {
    const id = req.params.id;
    const { nameOfDepartment, nameOfHod, categoryOfDepartment } = req.body;
    const syllabusOfDepartment = [];

    const departmentsInfo = [
      nameOfDepartment,
      nameOfHod,
      categoryOfDepartment,
      syllabusOfDepartment,
    ];
    const files = req.files;

    files.forEach((file) => {
      const location = file.location;
      syllabusOfDepartment.push(location);
    });
    const oldUnivesityData = await University.findById(id);
    const oldDepartmentInfo = [...oldUnivesityData.departmentsInfo];

    const updatedUniversityData = await University.findByIdAndUpdate(
      id,
      [...oldDepartmentInfo, departmentsInfo],
      {
        new: true,
        runValidators: true,
      }
    );
    res.staus(200).json({
      status: "success",
      data: {
        data: updatedUniversityData,
      },
    });
  });

exports.getAllUniversities = factory.getAll(University);

exports.getUniversity = factory.getOne(University);

exports.updateUniversity = factory.updateOne(University);

exports.deleteUniversity = factory.deleteOne(University);
