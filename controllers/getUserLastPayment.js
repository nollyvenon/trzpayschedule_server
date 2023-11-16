const Payment = require("../models/Payment");
exports.getUserLastPayment = async (req, res) => {
    try {
        
        const limit  = req.params.limit;
        var mysort = { created_at: -1 };
        const { user_id, email } = req.body;

        if (!user_id) {
          return res.status(501).send({
            status: false,
            message: "User id not provided.",
          });
        }   
      const payments = 
                    await Payment
                        .findOne({ $or: [ { _id: user_id }, { email: email } ] })
                        .sort(mysort);
      res.json(payments);
    
    } catch (error) {
    
        console.log(error);
      res.status(500).send({ message: 'An error occurred while fetching payments.' });
    
    }
  };