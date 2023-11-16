const TrainingSession = require("../models/TrainingSession");
exports.getUserTrainingSessions = async (req, res) => {
    try {

        const { user_id } = req.body;
        var mysort = { created_at: -1 };
  
        if (!user_id) {
            return res.status(501).send({
            status: false,
            message: "User id not provided.",
            });
        } 
        const training_sessions = await TrainingSession
                            .find({  _id: user_id })
                            .sort(mysort);
        res.json(training_sessions);
    
    } catch (error) {
    
        console.log(error);
      res.status(500).send({ message: 'An error occurred while fetching training sessions' });
    
    }
  };