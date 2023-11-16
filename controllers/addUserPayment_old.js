const localStorage = require("localStorage");
const Payment = require("../models/Payment");
const User = require("../models/User");
const TrainingSession = require("../models/TrainingSession");
const crypto = require('crypto');
const functions = require("../functions");
var querystring = require("querystring");
const axios = require("axios");
const Paypal = require("./Paypal");
require('dotenv').config();


exports.addUserPayment = async (req, res) => {
   let secret_code = functions.getSecretCode();
   localStorage.setItem('secret_code', secret_code); 
   let access_token = await Paypal.generateAccessToken();
     
    //require("./implementPaypalTransaction");  //Add the paypal payment section
    const { user_id, email, payment_gateway, pg_transid, payment_id, quantity, amount, serviceCost, currency, training_time, eventName, eventUri, inviteUri, eventPeriod, eventType, eventLocation} = req.body;   
    //pg_transid: this is transaction id of the payment gateway   

      const PAYPAL_OAUTH_API = process.env.PAYPAL_OAUTH_API;
      const PAYPAL_ORDER_API = process.env.PAYPAL_ORDER_API;
      /*basicAuth = Buffer.from(
        `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
      ).toString("base64");
    
      
          const auth = await axios.post(PAYPAL_OAUTH_API, querystring.stringify({ grant_type: "client_credentials" }),
                                          {
                                            headers: {
                                              "Content-Type": "application/x-www-form-urlencoded",
                                              'Access-Control-Allow-Origin':'*',
                                              Authorization: `Basic ${basicAuth}`,
                                            },
                                          })
                                          .then((res) => res.data)
                                          .then((res) => {
                                            console.log(res.json)
                                          })
                                          .catch((err) => {
                                            console.log(err);
                                          });
                                          console.log(auth)*/


        // const payment_id = req.body.payment_id;
        /*const details = await axios.get(PAYPAL_ORDER_API + payment_id, {
                                          headers: {
                                            'Content-Type':'application/json',
                                            'Access-Control-Allow-Origin':'*',
                                            Authorization: `Bearer ${access_token}`,
                                          },
                                        })
                                        .then((res) => res.data)
                                        .catch((err) => {
                                          console.log(err);
                                          return err;
                                        });*/
                                
    console.log(access_token)
    
   // if (details.purchase_units[0].amount.value !== '5.77') {
    //if (!details.purchase_units[0].amount.value) {
    //  console.log(details);
    //  return res.send(400);
    //} else {
        
        // console.log(title,body)
        if (!user_id || !training_time) {
          console.log("no User and Time entered");
          return res.status(400).send({
            message: "An error occurred, unable to subscribe.",
            status: false,
          });
        } else {
          let nuser_id = 'TRZC'+crypto.randomUUID()
          await User.findOne({ user_id: nuser_id }).then(async (user_check) => {
            while (user_check) {
              let nuser_id = 'TRZC'+crypto.randomUUID();
            }});
          //await TrainingSession.deleteMany({});
          const Passwordhash = bcrypt.hashSync(Password, 10);
          const newAccess0 = new User({ user_id: nuser_id, email, firstName, lastName, pg_transid, next_event_date, pin_code:secret_code, password: Passwordhash, });
          await newAccess0.save();

          const newAccess = new Payment({ user_id: nuser_id, email, payment_id, payment_gateway, pg_transid, serviceCost, currency, quantity, training_time, secret_code });
          await newAccess.save();

          const newAccess1 = new TrainingSession({ user_id: nuser_id, email, trainer_assigned, location, training_time, payment_id, secret_code, eventName, eventUri, inviteUri, eventPeriod, eventType, eventLocation });
          await newAccess1.save();

          return res.status(200).json({
            status: true,
            message: "Success. Done.",
            secret_code : secret_code
          });
        }
    //}
  };

