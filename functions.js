const Payment = require("./models/Payment");
const moment = require("moment");
const functions = require("./functions");


function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  function getYear() {
    const d = new Date();
    var amountOfYearsRequired = 1;
    const time = d.setFullYear(d.getFullYear() + amountOfYearsRequired);
    const year = new Date(time);
    return year;
  }
  function getDays(days) {
    var d = new Date();
    const time = d.setDate(d.getDate() + days);
    const times = new Date(time);
    return times;
  }

  function trimContent(str) {
    // Use trim() function
      const trimContent = str?.trim() || '';;

      //console.log(trimContent);
      return trimContent;
  }

  function betweenRandomNumber(min, max) { 
      return Math.floor(
        Math.random() * (max - min + 1) + min
      );
  }

  async function getSecretCode() {
    let secret_code = betweenRandomNumber(10000, 99999);
    /*await Payment.findOne({ secret_code: secret_code })
      .then(async (codeexist) => {
          if (codeexist) {
            getSecretCode();
          }
    });*/
    return secret_code;
  }

  const toTimestamp = (strDate) => {
    const dt = moment(strDate).unix();
    return dt;
  };

  module.exports = { validateEmail, trimContent, getYear, getDays, betweenRandomNumber, getSecretCode, toTimestamp };