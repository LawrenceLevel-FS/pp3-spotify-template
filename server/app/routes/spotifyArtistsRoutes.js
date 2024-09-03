const router = require("express").Router();
const {
  getAllArtists,
  getOneArtist,
  getArtistAlbum,
  getTopArtistTracks,
  getRelatedArtists,
} = require("../controller/spotifyArtistsController");

// GET ALL ARTISTS
router.get("/", getAllArtists);

// GET ONE ARTIST ID
router.get("/:id", getOneArtist);

// GET ARTIST'S ALBUM
router.get("/album", getArtistAlbum);

// GET ARTIST'S TOP TRACKS
router.get("/topAlbum", getTopArtistTracks);

// GET ARTIST'S  RELATED ARTISTS
router.get("/relatedArtists", getRelatedArtists);
module.exports = router;
