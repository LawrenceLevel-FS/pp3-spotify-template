const router = require("express").Router();
const { getToken } = require("../controller/authController");

// GET TOKEN ROUTE
router.post("/", getToken);
module.exports = router;
