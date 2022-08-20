const express = require('express');
const instituteController = require('./../controllers/instituteController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(instituteController.getAllInstitutes)
  .post(instituteController.createInstitute);

router.get('/getInsOfUser', instituteController.getInstituteOfUser);

router.patch('/:instituteId/addDepartment', instituteController.addDepartment);

router
  .route('/:id')
  .get(instituteController.getInstitute)
  .patch(instituteController.updateInstitute)
  .delete(instituteController.deleteInstitute);

module.exports = router;
