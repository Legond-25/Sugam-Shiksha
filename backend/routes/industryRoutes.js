const express = require("express");
const industryController = require("../controllers/industryController");

const router = express.Router();

router
  .route("/")
  .get(industryController.getAllIndustries)
  .post(industryController.createIndustry);

router.get("/me", industryController.getMe);

router.delete("/deleteMe", industryController.deleteMe);

router
  .route("/:id")
  .get(industryController.getIndustry)
  .patch(industryController.updateIndustry)
  .delete(industryController.deleteIndustry);

module.exports = router;
