const express = require("express");
const server = express();

const morgan = require("morgan");
const cors = require("cors");

// Middleware
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

// Routes
server.get("/", (req, res) => {
  res.status(200).json({ hello: "World!" });
});

module.exports = server;
