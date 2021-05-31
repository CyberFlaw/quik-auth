const express = require("express");
const app = express();

const main = require("./api/server");
const auth = require("./api/middlewares/auth");
const schema = require("./utils/schemaconfig");

require("dotenv").config();

const launchServer = (port, app) => {
  main(port, app);
};

module.exports = {
  launchServer,
  schema,
  auth,
};

// Just for testing purpose
// launchServer(8000, app);
