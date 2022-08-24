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

router.get('/industryBot', industryController.getBot);
// router.patch('/:id/getBotAnswers', industryController.getBotAnswers);

router.patch(
  '/:id/createBasicForm',
  industryController.uploadBasicS3,
  industryController.createBasicForm
);
router.patch(
  '/:id/createDetailForm',
  industryController.uploadDetailS3,
  industryController.createDetailForm
);

router
  .route('/:id')
  .get(industryController.getIndustry)
  .patch(industryController.updateIndustry)
  .delete(industryController.deleteIndustry);

module.exports = router;
