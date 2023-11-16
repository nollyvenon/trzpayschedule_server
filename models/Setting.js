const mongoose = require("mongoose");

const { Schema } = mongoose;

const Setting = new Schema({
  name: { type: String, default: "home" },
  aboutUs: [{ title: String, body: String }],
  serviceCost: { type: String },
  SitePhone: { type: String },
  SiteEmail: { type: String },
  SiteOfficeAddress: { type: String },
  TwitterLink: { type: String },
  FacebookLink: { type: String },
  InstagramLink: { type: String },
  linkedinLink: { type: String },
  YoutubeLink: { type: String },
});

module.exports = mongoose.model("settings", Setting);
