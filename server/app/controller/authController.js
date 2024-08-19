const axios = require("axios");
const Token = require("../models/Token");

// MAKE AND STORE TOKEN
const createToken = async (req, res) => {
  try {
    const data = `grant_type=client_credentials&client_id=${encodeURIComponent(
      process.env.SPOTIFY_CLIENT_ID
    )}&client_secret=${encodeURIComponent(process.env.SPOTIFY_CLIENT_SECRET)}`;

    const response = await axios({
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    });

    const tokenData = {
      accessToken: response.data.access_token,
      tokenType: response.data.token_type,
      expiresIn: response.data.expires_in,
    };

    await Token.create(tokenData);
    res.status(201).json({ token: tokenData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get Token" });
  }
};

// GET TOKEN
const getToken = async (req, res) => {
  try {
    const token = await Token.find();

    res.status(200).json({ token: token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createToken, getToken };
