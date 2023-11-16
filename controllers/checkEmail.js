const UserSchema = require("../models/User");

exports.checkEmail = async (req, res) => {
    const email = req.query.email;
    //const email = "maryolawale0987@gmail.com"; 

    if (!email) {
    return res
        .status(404)
        .send({ message: "Please provide a valid email." });
    }

    if (!functions.validateEmail(email)) {
    return res.status(404).json({ message: "Please use a valid email address." });
    }
   
    const EmailExists = await UserSchema.countDocuments( { Email: email });
    console.log("my email is: "+EmailExists);
    if (EmailExists > 0) {
        res.status(200).send({ message: 'Email exists in the database' });
    } else {
        res.status(404).send({ message: 'Email does not exist in the database' });
    }
};



