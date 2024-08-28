const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema(
  {
    accessToken: String,
    tokenType: String,
    expiresIn: Number,
    refreshToken: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Token", TokenSchema);
