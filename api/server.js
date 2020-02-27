const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const cohortsRouter = require("../cohorts/");
const studentsRouter = require("../students/router");

const server = express();

//middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

//routes
server.use("/api/cohorts", cohortsRouter);
server.use("/api/students", studentsRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
