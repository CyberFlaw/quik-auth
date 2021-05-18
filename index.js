const main = require("./api/server");
const auth = require("./api/middlewares/auth");

const launchServer = (port) => {
  main(port);
};

module.exports = {
  launchServer,
  auth,
};
