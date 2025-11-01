const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const detailSchema = new Schema({
  name: { type: String, required: true, default: "not given" },
  mail: { type: String, required: true, unique: true, default: "not given" },
  college: { type: String, required: true, default: "not given" },
  year: { type: String, required: true, default: "not given" },
  password: { type: String, required: true, default: "not given" },
  about: { type: String, default: "not given" },
  gpa: { type: Number, default: 0.0 },
  key: { type: String, default: "not given" },
  projects: { type: String, default: "not given" },
  skills: { type: String, default: "not given" },
  linkedin: { type: String, default: "not given" },
  github: { type: String, default: "not given" },
  followers: { type: [String], default: [] },
  following: { type: [String], default: [] },
  otp: { type: String },
  otpExpiry: { type: Number }
});
module.exports = mongoose.model("Detail", detailSchema);
