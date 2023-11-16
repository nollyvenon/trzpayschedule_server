const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TrainingSessionSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  email: {         //the user's email
    type: String,
    required: true
  },
  trainer_assigned: {        //this is trainer assigned to the client
    type: String,
  },
  location: {        //this is the location of the training
    type: String,
    required: true
  },
  training_time: {    //time the client entered for the training session
    type: Date,
    default: Date.now
  },
  payment_id: {    //the payment id of this training session
    type: String,
    required: true
  },
  entry_time: {    //time the client entered the training session
    type: Date,
    default: Date.now
  },
  exit_time: {      //time the client exited the training session
    type: Date,
    default: Date.now
  },
  secret_code: {       //the codes generated and sent via qrcode
    type: String,
    required: true
  },
  eventName: {       
    type: String,
    required: true
  },
  eventUri: {       
    type: String,
    required: true
  },
  inviteUri: {       
    type: String,
    required: true
  },
  eventPeriod: {       
    type: String,
    required: true
  },
  eventType: {       
    type: String,
    required: true
  },
  eventLocation: {       
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: 1
  }
});

module.exports = User = mongoose.model("training_sessions", TrainingSessionSchema);