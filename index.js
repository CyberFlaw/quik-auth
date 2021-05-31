const express = require("express");
const app = express();

const main = require("./api/server");
const auth = require("./api/middlewares/auth");
const schemaPath = require("./utils/schemaconfig");

require("dotenv").config();

const launchServer = (port, app) => {
  main(port, app);
};

module.exports = {
  launchServer,
  schemaPath,
  auth,
  app,
};

// Just for testing purpose
launchServer(8000, app);
