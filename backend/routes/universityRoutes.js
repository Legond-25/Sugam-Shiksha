const express = require("express");
const universityController = require("./../controllers/universityController");

const router = express.Router();

router
  .route("/")
  .get(universityController.getAllUniversities)
  .post(universityController.createUniversity);

router.get("/me", universityController.getMe);

router.delete("/deleteMe", universityController.deleteMe);

router
  .route("/:id")
  .get(universityController.getUniversity)
  .patch(universityController.updateUniversity)
  .delete(universityController.deleteUniversity);

module.exports = router;
