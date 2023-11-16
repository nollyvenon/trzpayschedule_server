const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TrainingSchema = new Schema({
  id: {
    type: Int,
    required: true
  },
  firstName: {       //this is first name of the trainer
    type: String,
    required: true
  },
  lastName: {        //this is last name of the trainer
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: 1
  }
});

module.exports = User = mongoose.model("trainings", TrainingSchema);
