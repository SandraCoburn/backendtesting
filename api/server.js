const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const cohortsRouter = require("../cohorts/");

const server = express();

//middleware
server.use(express.json());

//routes
server.get("/api/cohorts", cohortsRouter);
server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
