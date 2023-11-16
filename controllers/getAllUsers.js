const User = require("../models/User");
exports.getAllUsers = async (req, res) => {
    try {
      var mysort = { created_at: -1 };
      const users = await User.find({})
                              .sort(mysort);
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'An error occurred while fetching users' });
    }
  };