const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const userschema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("User", userschema);
