const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PaymentSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  payment_id: {  //this is the internal transaction id generated
    type: String,
    required: true
  },
  payment_gateway: {   //payment gateway used e.g. paypal, paystack etc
    type: String,
    required: true
  },
  pg_transid: {        //this is transaction id of the payment gateway
    type: String,
    required: true
  },
  serviceCost: {    
    type: String,    
    required: true
  },
  currency: {        
    type: String,
    required: true
  },
  quantity: {        
    type: String,
    required: true
  },
  training_time: {    //time the client entered for the training session
    type: Date,
    default: Date.now
  },
  secret_code: {       //the codes generated and sent via qrcode
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
    default: 1
  }
});

module.exports = User = mongoose.model("payments", PaymentSchema);