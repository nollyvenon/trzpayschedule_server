const User = require("../models/User");
exports.updateUser = async (req, res) => {
    const data = req.body.formReponse;
  
    const { firstName, lastName, mobileNumber } = JSON.parse(data);
  
    const id = req.body.id;
    const params = req.file
      ? {
          imgUrl: `${process.env.WEB_URL}` + "/api/v1/media/" + req.file.filename,
          firstName,
          lastName,
          mobileNumber,
          gender,
          email,
          maritalStatus,
          city_name,
          state_name,
          country
        }
      : {
          firstName,
          lastName,
          mobileNumber,
          gender,
          email,
          maritalStatus,
          city_name,
          state_name,
          country
        };
  
    for (let key in params) {
      if (!params[key]) {
        delete params[key];
      }
    }
    await User.findByIdAndUpdate({ _id: id }, params, {
      new: true,
      useFindAndModify: false,
    })
      .then((data) => {
        return res.json({
          userData: data,
          status: true,
          message: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(501).send({
          message: "An error occurred,unable update post to premium",
          status: false,
        });
      });
  };