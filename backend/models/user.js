const mongoose = require("mongoose");

const userschema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

userschema.plugin(UniqueValidator);

module.exports = mongoose.model("User", userschema);
