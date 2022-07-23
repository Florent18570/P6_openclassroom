const mongoose = require("mongoose");

const userschema = mongoose.Schema({
  email: String,
  password: String,
});

module.exports = mongoose.model("User", userschema);
