//importing user model
const User = require("../models/User");

// @GET ALL USERS
const getUsers = async (req, res) => {
  try {
    res.status(200).json({ message: "Route working" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @POST USER
const createNewUser = async (req, res) => {
  try {
    const body = res.body;
    res.status(201).json({ data: body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @GET USER BY ID
const getUserById = async (req, res) => {};

// @UPDATE USER BY ID
const updateUserById = async (req, res) => {};

// @DELETE USER BY ID
const deleteUserId = async (req, res) => {};

module.exports = {
  getUsers,
  createNewUser,
  getUserById,
  updateUserById,
  deleteUserId,
};
