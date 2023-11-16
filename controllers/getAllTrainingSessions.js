const TrainingSession = require("../models/TrainingSession");
exports.getAllTrainingSessions = async (req, res) => {
    try {
      var mysort = { created_at: -1 };  
      const training_sessions = await TrainingSession.find({})
                                                     .sort(mysort); 
      res.json(training_sessions);
    
    } catch (error) {
    
        console.log(error);
      res.status(500).send({ message: 'An error occurred while fetching training sessions.' });
    
    }
  };