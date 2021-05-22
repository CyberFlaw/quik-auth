const express = require("express");
const app = express();

const { main } = require("./api/server");
const auth = require("./api/middlewares/auth");
// const app = require("./api/server");

const launchServer = (port) => {
  main(port, app);
};

// module.exports = {
//   launchServer,
//   auth,
//   app,
// };

launchServer(8000, app);
