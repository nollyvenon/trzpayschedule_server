const TrainingSession = require("../models/TrainingSession");
exports.addTrainingSession = async (req, res) => {
    const { user_id, email, trainer_assigned, location, training_time, payment_id, secret_code } = req.body;
    // console.log(title,body)
    if (!user_id || !training_time) {
      console.log("no User and Time entered");
      return res.status(400).send({
        message: "An error occured,unable to subscribe",
        status: false,
      });
    } else {
      //await TrainingSession.deleteMany({});
      const newAccess = new TrainingSession({ user_id, email, trainer_assigned, location, training_time, payment_id, secret_code });
      await newAccess.save();
      return res.status(200).json({
        status: true,
        message: "Success. Done.",
      });
    }
  };