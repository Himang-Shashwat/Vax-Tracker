const mongoose = require("mongoose");

const childSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A child must have a name"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "A child must have a date of birth"],
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "A child must have a parent"],
  },
  hospitalId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "A child must have a hospital associated with them"],
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: [true, "A child must have a gender"],
  },
});

const Child = mongoose.model("Child", childSchema);

module.exports = Child;
