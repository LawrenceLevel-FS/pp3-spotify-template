const axios = require("axios");
const { getNewestToken } = require("../middleware/getToken");

// GET ALL ARTISTS
const getAllArtists = async (req, res) => {
  const token = await getNewestToken();

  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6",
      {
        headers: {
          Authorization: `${token.tokenType} ${token.accessToken}`,
        },
      }
    );

    const data = response.data;

    res.status(200).json({
      message: `status: ${res.statusCode}`,
      data: data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ONE ARTIST ID
const getOneArtist = (req, res) => {
  res.json({ test: req.params.id });
};
// GET ARTIST'S ALBUM
const getArtistAlbum = (req, res) => {
  res.json({ test: "Testing this route" });
};
// GET ARTIST'S TOP TRACKS
const getTopArtistTracks = (req, res) => {
  res.json({ test: "Testing this route" });
};
// GET ARTIST'S RELATED ARTISTS
const getRelatedArtists = (req, res) => {
  res.json({ test: "Testing this route" });
};

module.exports = {
  getAllArtists,
  getOneArtist,
  getArtistAlbum,
  getTopArtistTracks,
  getRelatedArtists,
};
