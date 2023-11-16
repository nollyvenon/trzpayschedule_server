const Payment = require("../models/Payment");
exports.getFutureSchedules = async (req, res) => {
    let curst = Date.now();  
    var mysort = { created_at: -1 };    
    await Payment.find({ "training_time": { $gt: curst } })
    .lean()
    .sort(mysort)
    .then(async (response) => {
        return res.status(200).json({
          status: true,
          message: "Fetch was successful.",
          userData: response,
        });
    })
    .catch ((error) => {
    
      console.log(error);
      res.status(500).send({ message: 'An error occurred while fetching future schedules...' });
    
    });
  };