const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const db = require("./db/database");

// Middleware
app.use(morgan("dev"));
app.use(cors());

// DATABASE
db();

// PORT 3001
const port = process.env.PORT || 3001;

module.exports = { app, port };
