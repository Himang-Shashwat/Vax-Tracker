const mongoose = require("mongoose");

const vaccineSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: [50, "Name of the vaccine should be less than 20 characters"],
    required: [true, "Name of the vaccine is required"],
  },
  disease: {
    type: String,
    maxLength: [50, "Name of the disease should be less than 20 characters"],
    required: [true, "Name of the disease is required"],
  },
  sideEffects: {
    type: String,
  },
  importance: {
    type: String,
  },
  administrationAge: {
    type: Array,
    default: [],
    required: [true, "List of administration age is required"],
  },
});

const Vaccine = mongoose.model("Vaccine", vaccineSchema);

module.exports = Vaccine;
