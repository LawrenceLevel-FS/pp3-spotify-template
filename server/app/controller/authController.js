const Token = require("../models/Token");
const SpotifyWebApi = require("spotify-web-api-node");
const axios = require("axios");
const querystring = require("querystring");

// LOGIN
const login = (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
  });

  let scope = "user-read-private user-read-email";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope: scope,
        redirect_uri: process.env.REDIRECT_URI,
      })
  );
};

// CALLBACK
const callback = async (req, res) => {
  try {
    const code = req.query.code || null;

    const authOptions = {
      method: "post",
      url: "https://accounts.spotify.com/api/token",
      data: {
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: "authorization_code",
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer.from(
            process.env.SPOTIFY_CLIENT_ID +
              ":" +
              process.env.SPOTIFY_CLIENT_SECRET
          ).toString("base64"),
      },
      json: true,
    };
    const {
      data: {
        access_token: accessToken,
        token_type: tokenType,
        expires_in: expiresIn,
        refresh_token: refreshToken,
      },
    } = await axios(authOptions);

    const token = await Token.create({
      accessToken,
      tokenType,
      expiresIn,
      refreshToken,
    });

    res.redirect("http://localhost:3000 ");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// GET TOKEN
const getToken = async (req, res) => {
  try {
    const token = await Token.find();
    res.status(200).json({ token: token });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = { callback, login, getToken };
