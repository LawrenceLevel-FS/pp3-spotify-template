const axios = require("axios");
const { getNewestToken } = require("../middleware/getToken");

// GET ALL CATEGORIES
const getCategories = async (req, res) => {
  const token = await getNewestToken();
  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/browse/categories",
      {
        headers: {
          Authorization: `${token.tokenType} ${token.accessToken}`,
        },
      }
    );

    const data = response.data;
    res.status(200).json(data);
    return;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST CATEGORIES ITEMS
const postCategoryItem = async (req, res) => {
  try {
    const token = await getNewestToken();

    const categoryItem = await req.body;
    //   console.log(categoryItem);
    const response = await axios.get(categoryItem.href, {
      headers: { Authorization: `${token.tokenType} ${token.accessToken}` },
    });

    const data = response.data;
    const link = `${req.originalUrl}/${data.id}`;
    res.status(200).json({ redirectUrl: link });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST CATEGORY PLAYLISTS
const categoryPlaylists = async (req, res) => {
  try {
    const token = await getNewestToken();

    const categoryItem = await req.body;

    const response = await axios.get(categoryItem.href + "/playlists", {
      headers: { Authorization: `${token.tokenType} ${token.accessToken}` },
    });

    const data = response.data;
    console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST CATEGORY TRACKS
const categloryTracks = async (req, res) => {
  try {
    const token = await getNewestToken();

    const catTracks = await req.body.tracks;
    const response = await axios.get(catTracks.href, {
      headers: { Authorization: `${token.tokenType} ${token.accessToken}` },
    });

    const data = response.data;
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCategories,
  postCategoryItem,
  categoryPlaylists,
  categloryTracks,
};
