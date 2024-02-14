const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Immunization = require("../models/immunizationModel");
const APIFeatures = require("../utils/apiFeatures");
const authController = require("./authController");

exports.getAllImmunizationsUser = catchAsync(async (req, res, next) => {
  let filter = { childId: req.params.id };

  const features = new APIFeatures(Immunization.find(filter), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const fetchedImmunizations = await features.query;
  if (!fetchedImmunizations) {
    return next(
      new AppError("No immunizations associated with the given id", 404)
    );
  }

  res.status(200).json({
    status: "success",
    results: fetchedImmunizations.length,
    data: fetchedImmunizations,
  });
});

exports.getAllImmunizationsHospital = catchAsync(async (req, res, next) => {
  let filter = { hospitalId: req.user.id, currentStatus: { $ne: "upcoming" } };

  const features = new APIFeatures(Immunization.find(filter), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const fetchedImmunizations = await features.query;

  res.status(200).json({
    status: "success",
    results: fetchedImmunizations.length,
    data: fetchedImmunizations,
  });
});

exports.getOneImmunization = catchAsync(async (req, res, next) => {
  const fetchedImmunization = await Immunization.findOne({
    childId: req.params.id,
    _id: req.params.immunizationId,
  });

  if (!fetchedImmunization) {
    return next(
      new AppError(
        `Immunization record with ${req.params.id} id does not exist`
      )
    );
  }

  res.status(200).json({
    status: "success",
    data: fetchedImmunization,
  });
});

//Only for testing, all the immunization records will be added when the child record is created
exports.addImmunization = catchAsync(async (req, res, next) => {
  const createdImmunization = await Immunization.create(req.body);
  res.status(201).json({
    status: "success",
    data: createdImmunization,
  });
});
