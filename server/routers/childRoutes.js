const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const childController = require("../controllers/childController");
const handlerFactory = require("../controllers/handlerFactory");
const Child = require("../models/childModel");

router.use(authController.protect);
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
