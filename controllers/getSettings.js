const Setting = require("../models/Setting");
exports.getSettings = async (req, res) => {
    try {
      var mysort = { created_at: -1 };
        const settings = await Setting.find({ })
                                       .sort(mysort);
        res.json(settings);

    } catch (error) {

        console.log(error);
        res.status(500).send({ message: 'An error occurred while fetching Settings' });

    }
  };