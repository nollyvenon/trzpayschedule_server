const TrainingSession = require("../models/TrainingSession");
exports.getUserLastTrainingSession = async (req, res) => {
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
      const training_session = 
                    await TrainingSession
                        .findOne({ $or: [ { _id: user_id }, { email: email } ] })
                        .sort(mysort);
      res.json(training_session);
    
    } catch (error) {
    
        console.log(error);
      res.status(500).send({ message: 'An error occurred while fetching Training Session.' });
    
    }
  };