const router = require("express").Router();
const { createToken, getToken } = require("../controller/authController");

// CREATE AND STORE TOKEN ROUTE
router.post("/", createToken);

// GET TOKEN ROUTE
router.get("/", getToken);

module.exports = router;
