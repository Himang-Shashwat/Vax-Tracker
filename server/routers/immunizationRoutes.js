const express = require("express");
const immunizationController = require("../controllers/immunizationController");
const authController = require("../controllers/authController");

const router = express.Router();

router.use(authController.protect);

//These are only for hospitals users, for normal users refer childRoutes.js
router
  .route("/")
  .post(immunizationController.addImmunization)
  .get(
    authController.restrictTo("hospital"),
    immunizationController.getAllImmunizationsHospital
  );

module.exports = router;
