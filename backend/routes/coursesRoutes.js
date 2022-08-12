const express = require("express");
const router = express.Router();

const coursesController = require("../controllers/coursesController");

router
  .route("/")
  .get(coursesController.getAllCourses)
  .post(coursesController.createCourses);

router.get("/me", coursesController.getMe);

router.delete("/deleteMe", coursesController.deleteMe);

router
  .route("/:id")
  .get(coursesController.getCourses)
  .patch(coursesController.updateCourses)
  .delete(coursesController.deleteCourses);

module.exports = router;
