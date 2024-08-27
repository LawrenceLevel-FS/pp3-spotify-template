const router = require("express").Router();
const {
  getUsers,
  createNewUser,
  getUserById,
  updateUserById,
  deleteUserId,
} = require("../controller/userController");

// @GET ALL USERS
router.get("/", getUsers);

// @POST USER
router.post("/", createNewUser);

// @GET USER BY ID
router.get("/:id", getUserById);

// @UPDATE USER BY ID
router.put("/:id", updateUserById);

// @DELETE USER BY ID
router.delete("/:id", deleteUserId);

module.exports = router;
