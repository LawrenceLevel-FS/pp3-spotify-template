const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(cors());

const port = process.env.PORT || 3001;

module.exports = { app, port };
