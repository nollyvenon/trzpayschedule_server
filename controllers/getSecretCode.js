const functions = require("../functions");

exports.getSecretCode =  (req, res) => {
   let secret_code = 'TRZ'+ functions.betweenRandomNumber(100, 999)+ functions.betweenRandomNumber(100, 999);
    /*await Payment.findOne({ secret_code: secret_code })
      .then(async (codeexist) => {
          if (codeexist) {
            getSecretCode();
          }
    });*/
   return res.status(200).json({
    status: true,
    message: "Success. Done.",
    secret_code : secret_code
  });
}