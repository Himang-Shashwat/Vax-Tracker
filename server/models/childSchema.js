const mongoose = require('mongoose');

const childSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A child must have a name'],
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'A child must have a date of birth'],
  },
  parentId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'A child must have a parent'],
  },
  vaccinations: [{ type: mongoose.Schema.ObjectId, ref: 'Immunization' }],
});

const Child = mongoose.Schema('Child', childSchema);

module.exports = Child;
