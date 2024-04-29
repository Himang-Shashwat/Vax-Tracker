const express = require("express");
const vaccineController = require("./../controllers/vaccineController");

const router = express.Router();

router.get("/", vaccineController.getAllVaccines);
router.get("/:id", vaccineController.getOneVaccine);

module.exports = router;
