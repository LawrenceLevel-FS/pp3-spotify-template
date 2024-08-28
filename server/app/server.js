const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const db = require("./db/database");
// Importing Routes
const tokenGenRouter = require("./routes/authRoute");
const userRoutes = require("./routes/userRoute");

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DATABASE
db();

// PORT 3001
const port = process.env.PORT || 3001;

// Routes
app.use("/auth", tokenGenRouter);
app.use("/user", userRoutes);

module.exports = { app, port };
