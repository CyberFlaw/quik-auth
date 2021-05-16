const main = require("./api/server");

const launchServer = (port) => {
  main(port);
};

module.exports = {
  launchServer,
};
