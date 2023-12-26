const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const APIFeatures = require("./../utils/apiFeatures");
const Vaccine = require("./../models/vaccineModel");

exports.getAllVaccines = catchAsync(async (req, res, next) => {
  let filter = {};
  const features = new APIFeatures(Vaccine.find(filter), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const fetchedVaccines = await features.query;

  res.status(200).json({
    status: "success",
    results: fetchedVaccines.length,
    data: fetchedVaccines,
  });
});

exports.getOneVaccine = catchAsync(async (req, res, next) => {
  const vaccine = await Vaccine.findById(req.params.id);
  if (!vaccine) {
    return next(new AppError(`Vaccine with that id does not exist`, 404));
  }
  res.status(200).json({
    status: "success",
    data: vaccine,
  });
});
