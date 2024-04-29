const express = require("express");
const immunizationController = require("../controllers/immunizationController");
const authController = require("../controllers/authController");

const router = express.Router();

router.use(authController.protect);

router
  .route("/:id")
  .get(immunizationController.getOneImmunization)
  .patch(immunizationController.updateImmunization);

router.route("/").get(immunizationController.getAllImmunizationsHospital);

module.exports = router;
