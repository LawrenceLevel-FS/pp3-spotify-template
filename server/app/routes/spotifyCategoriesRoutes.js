const router = require("express").Router();
const {
  getCategories,
  potCategoryItem,
} = require("../controller/spotifyCategories");

// GET ALL CATEGORIES
router.get("/", getCategories);

router.post("/", potCategoryItem);

module.exports = router;
