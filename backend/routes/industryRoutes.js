const express = require('express');
const industryController = require('../controllers/industryController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(industryController.getAllIndustries)
  .post(industryController.createIndustry);

router.get('/getIndOfUser', industryController.getIndustryOfUser);

router
  .route('/:id')
  .get(industryController.getIndustry)
  .patch(industryController.updateIndustry)
  .delete(industryController.deleteIndustry);

module.exports = router;
