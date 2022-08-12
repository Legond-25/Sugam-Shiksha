const express = require("express");
const router = express.Router();

const alumniController = require("../controllers/alumniController");

router
  .route("/")
  .get(alumniController.getAllAlumni)
  .post(alumniController.createAlumni);

router.get("/me", alumniController.getMe);

router.delete("/deleteMe", alumniController.deleteMe);

router
  .route("/:id")
  .get(alumniController.getAlumni)
  .patch(alumniController.updateAlumni)
  .delete(alumniController.deleteAlumni);

module.exports = router;
