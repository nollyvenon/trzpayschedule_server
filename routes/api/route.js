const express = require('express');
const Router = express.Router();

const {getAllUsers} = require("../../controllers/getAllUsers");
const {checkEmail} = require("../../controllers/checkEmail");
const {updatePassword} = require("../../controllers/updatePassword");
const {sendEmail} = require("../../controllers/sendEmail");
const {userLogin} = require("../../controllers/userLogin");
const {getAllPayments} = require("../../controllers/getAllPayments");
const {getAllTrainingSessions} = require("../../controllers/getAllTrainingSessions");
//const { getAvailableDates } = require("../../controllers/getAvailableDates");
const {getFutureSchedules} = require("../../controllers/getFutureSchedules");
const {getUserLastPayment} = require("../../controllers/getUserLastPayment");
const {getUserLastTrainingSession} = require("../../controllers/getUserLastTrainingSession");
const {getUserPayments} = require("../../controllers/getUserPayments");
const {getUserTrainingSessions} = require("../../controllers/getUserTrainingSessions");
const {getUser} = require("../../controllers/getUser");
const {getPaymentByID} = require("../../controllers/getPaymentbyId");
const {addTrainingSession} = require("../../controllers/addTrainingSession");
const {addUser} = require("../../controllers/addUser");
const {addUserPayment} = require("../../controllers/addUserPayment");
const {getSettings} = require("../../controllers/getSettings");
const {updateSetting} = require("../../controllers/updateSetting");
const {addSetting} = require("../../controllers/addSetting");
const {
    generateAccessToken,
    newOrder,
    createOrder,
    capturePayment,
    generateClientToken,
    orderStatus
} = require("../../controllers/Paypal");
const {getSecretCode} = require("../../controllers/getSecretCode");

//const { implementPaypalTransaction } = require("../../controllers/implementPaypalTransaction");

Router.get("/getAllUsers", getAllUsers);
Router.get("/check_email", checkEmail);
Router.get("/update-password ", updatePassword);
Router.get("/sendEmail", sendEmail);
Router.post("/userLogin", userLogin);
Router.get("/getAllPayments", getAllPayments);
Router.get("/getAllTrainingSessions", getAllTrainingSessions);
//Router.get("/getAvailableDates", getAvailableDates);
Router.get("/getFutureSchedules", getFutureSchedules);
Router.get("/getUserLastPayment", getUserLastPayment);
Router.get("/getUserLastTrainingSession", getUserLastTrainingSession);
Router.get("/getUserPayments", getUserPayments);
Router.get("/getUserTrainingSessions", getUserTrainingSessions);
Router.get("/getUser", getUser);
Router.get("/getPaymentByID", getPaymentByID);
Router.post("/addUser", addUser);
Router.post("/addTrainingSession", addTrainingSession);
Router.post("/addUserPayment", addUserPayment);
Router.get("/getSettings", getSettings);
Router.post("/updateSetting", updateSetting);
Router.post("/addSetting", addSetting);
//Router.get("/implementPaypalTransaction", implementPaypalTransaction);

Router.post("/createOrder", createOrder);
Router.post("/generateAccessToken", generateAccessToken);
Router.post("/capturePayment", capturePayment);
Router.post("/generateClientToken", generateClientToken);
Router.post("/orderStatus", orderStatus);

Router.post("/newOrder", newOrder);
Router.get("/getSecretCode", getSecretCode);

/*Router.post("/orders/:orderID/capture", async (req, res) => {
    const { orderID } = req.params;
    try {
      const captureData = await Paypal.capturePayment(orderID);
      res.json(captureData);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });*/


module.exports = Router;

