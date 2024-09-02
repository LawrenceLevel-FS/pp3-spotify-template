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
const potCategoryItem = async (req, res) => {
  res.status(201).json(req.body);
};

module.exports = { getCategories, potCategoryItem };
