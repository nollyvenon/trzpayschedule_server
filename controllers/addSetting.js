const Setting = require("../models/Setting");
exports.addSetting = async (req, res) => {
    const { aboutUs, serviceCost, SitePhone, SiteEmail, SiteOfficeAddress, TwitterLink, FacebookLink, InstagramLink, linkedinLink, YoutubeLink } = req.body;
    // console.log(title,body)
    if (!user_id || !training_time) {
      console.log("no User and Time entered");
      return res.status(400).send({
        message: "An error occured,unable to subscribe",
        status: false,
      });
    } else {
      //await Setting.deleteMany({});
      const newAccess = new Setting({ aboutUs, serviceCost, SitePhone, SiteEmail, SiteOfficeAddress, TwitterLink, FacebookLink, InstagramLink, linkedinLink, YoutubeLink });
      await newAccess.save();
      return res.status(200).json({
        status: true,
        message: "Success. Done.",
      });
    }
  };
