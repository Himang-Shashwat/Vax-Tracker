const mongoose = require("mongoose");

const immunizationSchema = mongoose.Schema({
  vaccineId: {
    type: mongoose.Schema.ObjectId,
    ref: "Vaccine",
    required: [true, "Immunization must belong to a vaccine"],
  },
  childId: {
    type: mongoose.Schema.ObjectId,
    ref: "Child",
    required: [true, "Immunization must belong to a child"],
  },
  hospitalId: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: [true, "Immunization must have a hospital associated"],
  },
  administrationDate: {
    type: Date,
    required: [true, "Date of administration is required"],
  },
  currentStatus: {
    type: String,
    enum: ["upcoming", "scheduled", "completed"],
    default: "upcoming",
  },
});

const Immunization = mongoose.model("Immunization", immunizationSchema);

module.exports = Immunization;
