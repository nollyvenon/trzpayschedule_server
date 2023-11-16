const Payment = require("../models/Payment");
exports.getUserPayments = async (req, res) => {
    try {

        const { user_id, email } = req.params;
        var mysort = { created_at: -1 };
  
        if (!user_id && !email) {
            return res.status(501).send({
            status: false,
            message: "User id not provided.",
            });
        } 
        const payments = await Payment
                            .findOne({ $or: [ { _id: user_id }, { email: email } ] })
                            .sort(mysort);
        res.json(payments);
    
    } catch (error) {
    
        console.log(error);
      res.status(500).send({ message: 'An error occurred while fetching payments' });
    
    }
  };