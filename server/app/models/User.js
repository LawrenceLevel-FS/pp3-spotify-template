const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  email: String,
});

module.exports = mongoose.model("User", UserSchema);
