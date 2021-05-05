const express = require("express");
const path = require("path");
const config = require("./config/index.js");
const app = express();

app.use(
  express.static(path.join(__dirname, "public"))
);

app.listen(config.port, function () {
  console.log(`${config.appName} is server on ${config.host}:${config.port}`);
});