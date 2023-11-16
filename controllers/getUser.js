const User = require("../models/User");
exports.getUser = async (req, res) => {
    try {
        const { user_id } = req.params;
  
        if (!user_id) {
          return res.status(501).send({
            status: false,
            message: "User id not provided.",
          });
        }  

        const user = await User.find({  _id : user_id });
        res.json(user);

    } catch (error) {

        console.log(error);
        res.status(500).send({ message: 'An error occurred while fetching users' });

    }
  };