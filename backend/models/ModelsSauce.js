const mongoose = require("mongoose");

const saucesSchema = mongoose.Schema({
  name: String,
  manufacturer: String,
  description: String,
  mainPepper: String,
  imageUrl: String,
  heat: Number,
  likes: Number,
  dislikes: Number,
  usersLiked: { type: [String] },
  usersDisliked: { type: [String] },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("saucesSchema", saucesSchema);
