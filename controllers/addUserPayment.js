const localStorage = require("localStorage");
const Payment = require("../models/Payment");
const User = require("../models/User");
const TrainingSession = require("../models/TrainingSession");
const crypto = require('crypto');
const functions = require("../functions");
var querystring = require("querystring");
const axios = require("axios");
const Paypal = require("./Paypal");
var bcrypt = require('bcryptjs');
require('dotenv').config();

const {API_URL} = process.env;

exports.addUserPayment = async (req, res) => {
    //let secret_code = 'TRZ'+ functions.getSecretCode();
    //const response = await fetch(`${ API_URL }/getSecretCode`)
    //let secret_code = 'TRZ'+ response.json().secret_code;
    let secret_code = 'TZ' + functions.betweenRandomNumber(100, 999) + functions.betweenRandomNumber(100, 999)
    localStorage.setItem('secret_code', secret_code);

    const {
        user_id,
        email,
        payment_gateway,
        firstName,
        lastName,
        mobileNumber,
        address,
        address2,
        postal_code,
        country_code,
        pg_transid,
        payment_id,
        quantity,
        amount,
        serviceCost,
        currency_code,
        training_time,
        eventName,
        trainer_assigned,
        eventUri,
        inviteUri,
        eventPeriod,
        eventType,
        eventLocation
    } = req.body;
    //pg_transid: this is transaction id of the payment gateway

    const PAYPAL_OAUTH_API = process.env.PAYPAL_OAUTH_API;
    const PAYPAL_ORDER_API = process.env.PAYPAL_ORDER_API;

    if (!user_id || !training_time) {
        console.log("no User and Time entered");
        return res.status(400).send({
            message: "An error occurred, unable to subscribe.",
            status: false,
        });
    } else {
        let nuser_id = 'TRZC' + crypto.randomUUID()
        await User.findOne({user_id: nuser_id}).then(async (user_check) => {
            while (user_check) {
                let nuser_id = 'TRZC' + crypto.randomUUID();
            }
        });
        //await TrainingSession.deleteMany({});
        const Passwordhash = bcrypt.hashSync("rhema", 10);
        const indexOfT = training_time.indexOf('T');
        const ntraining_date = training_time.substring(0, indexOfT);
        const ntraining_time = training_time.slice(11, 20);
        console.log((ntraining_time));
        let serviceCost = 20;

        User.findOne({email: email}).then(async user => {
            // Check if user exists
            if (!user) {
                const newAccess0 = new User({
                    user_id: nuser_id,
                    email,
                    firstName,
                    lastName,
                    mobileNumber,
                    address,
                    address2,
                    postal_code,
                    country_code,
                    pg_transid,
                    next_event_date: ntraining_date,
                    pin_code: secret_code,
                    password: Passwordhash,
                });
                await newAccess0.save();
            } else {  //update User
                /*const params = { firstName, lastName, mobileNumber, next_event_date:ntraining_date, pg_transid, pin_code:secret_code };
                await User.findByIdAndUpdate(email, params, {
                  returnOriginal: false,
                  useFindAndModify: false,
                }).then((response) => {
                    return res.status(200).json({ message: "success", status: true });
                })*/
                const newAccess0 = new User({
                    user_id: nuser_id,
                    email,
                    firstName,
                    lastName,
                    mobileNumber,
                    pg_transid,
                    next_event_date: ntraining_date,
                    pin_code: secret_code,
                    password: Passwordhash,
                });
                await newAccess0.save();
            }
        });


        const newAccess = new Payment({
            user_id: nuser_id,
            email,
            payment_id,
            payment_gateway,
            pg_transid,
            serviceCost,
            currency: currency_code,
            quantity,
            training_time: ntraining_date,
            secret_code
        });
        await newAccess.save();

        const newAccess1 = new TrainingSession({
            user_id: nuser_id,
            email,
            trainer_assigned,
            location: eventLocation,
            training_time: ntraining_date,
            payment_id,
            secret_code,
            eventName,
            eventUri,
            inviteUri,
            eventPeriod,
            eventType,
            eventLocation
        });
        await newAccess1.save();

        return res.status(200).json({
            status: true,
            message: "Success. Done.",
            secret_code: secret_code
        });
    }
};

