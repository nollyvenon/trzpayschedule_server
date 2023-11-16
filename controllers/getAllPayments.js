const Payment = require("../models/Payment");
exports.getAllPayments = async (req, res) => {
    try {
      var mysort = { created_at: -1 };  
      const payments = await Payment.find({})
                                    .sort(mysort);  
      res.json(payments);
    
    } catch (error) {
    
        console.log(error);
      res.status(500).send({ message: 'An error occurred while fetching payments' });
    
    }
  };