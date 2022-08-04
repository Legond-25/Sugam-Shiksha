const express = require("express");
const instituteController = require("./../controllers/instituteController");

const router = express.Router();

router
  .route("/")
  .get(instituteController.getAllInstitutes)
  .post(instituteController.createInstitute);

router.get("/me", instituteController.getMe);

router.delete("/deleteMe", instituteController.deleteMe);

router
  .route("/:id")
  .get(instituteController.getInstitute)
  .patch(instituteController.updateInstitute)
  .delete(instituteController.deleteInstitute);

module.exports = router;
