const Payment = require("../models/Payment");
exports.getPaymentByID = async (req, res) => {
    try {

        const { payment_id } = req.body;
        var mysort = { created_at: -1 };
  
        if (!payment_id) {
            return res.status(501).send({
            status: false,
            message: "Payment id not provided.",
            });
        } 
        const payments = await Payment
                            .find({  _id: payment_id })
                            .sort(mysort);
        res.json(payments);
    
    } catch (error) {
    
        console.log(error);
        res.status(500).send({ message: 'An error occurred while fetching payment information' });
    
    }
  };