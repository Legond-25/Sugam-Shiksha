const express = require("express");
const router = express.Router();

const aluQueController = require("../controllers/aluQueController");

router
  .route("/")
  .get(aluQueController.getAllAluQue)
  .post(aluQueController.createAluQue);

router.get("/me", aluQueController.getMe);

router.delete("/deleteMe", aluQueController.deleteMe);

router
  .route("/:id")
  .get(aluQueController.getAluQue)
  .patch(aluQueController.updateAluQue)
  .delete(aluQueController.deleteAluQue);

module.exports = router;
