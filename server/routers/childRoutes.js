const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const childController = require("../controllers/childController");
const immunizationController = require("../controllers/immunizationController");

router.use(authController.protect);

router
  .route("/:id/immunizations")
  .get(
    authController.restrictTo("user"),
    immunizationController.getAllImmunizationsUser
  );

//For getting all immunization records for a child
router
  .route("/:id/immunizations/")
  .get(immunizationController.getOneImmunization);

router
  .route("/:id")
  .get(childController.getOneChild)
  .patch(authController.restrictTo("user"), childController.updateChild)
  .delete(authController.restrictTo("user"), childController.deleteChild);

router
  .route("/")
  .get(childController.getAllChildren)
  .post(
    authController.restrictTo("user", "admin"),
    childController.createChild
  );

module.exports = router;
