const Settings = require("../models/Setting");
exports.updateSetting = async (req, res) => {
    const { aboutUs, serviceCost, SitePhone, SiteEmail, SiteOfficeAddress, TwitterLink, FacebookLink, InstagramLink, linkedinLink, YoutubeLink } = req.body;
  
    await Settings.findByIdAndUpdate( aboutUs, serviceCost, SitePhone, SiteEmail, SiteOfficeAddress, TwitterLink, FacebookLink, InstagramLink, linkedinLink, YoutubeLink )
      .then((response) => {
        return res.status(200).json({ message: "Success", status: true });
      })
      .catch((err) => {
        console.log(err);
        return res
          .status(404)
          .json({ message: "Operation not successful", status: false });
      });
  };