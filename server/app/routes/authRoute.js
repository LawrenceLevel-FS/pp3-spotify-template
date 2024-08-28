const router = require("express").Router();
const { login, callback, getToken } = require("../controller/authController");

// CREATE AND STORE TOKEN ROUTE
// router.post("/getToken", createToken);

// // GET TOKEN ROUTE
// router.get("/getToken", getToken);

// LOGIN
router.get("/login", login);
// CALLBACK
router.get("/callback", callback);
router.get("/getToken", getToken);

module.exports = router;
