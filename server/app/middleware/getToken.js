const axios = require("axios");

const getNewestToken = async () => {
  const tokenResponse = await axios.get("http://localhost:3001/auth/getToken");

  const { tokenType, refreshToken, accessToken, expiresIn } =
    tokenResponse.data.token[tokenResponse.data.token.length - 1];

  return { tokenType, refreshToken, accessToken, expiresIn };
};

module.exports = { getNewestToken };
