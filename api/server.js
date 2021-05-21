const express = require("express");
const server = express();

const survivorRouter = require('./survivors/router')

server.use(express.json());

server.use('/api/survivors', survivorRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;