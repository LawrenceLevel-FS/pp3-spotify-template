const router = require("express").Router();
const {
  getCategories,
  postCategoryItem,
  categoryPlaylists,
  categloryTracks,
} = require("../controller/spotifyCategories");

// GET ALL CATEGORIES
router.get("/", getCategories);

router.post("/", postCategoryItem);

router.post("/playlist", categoryPlaylists);

router.post("/tracks", categloryTracks);

module.exports = router;
