const main = require("./api/server");
const config = require("./config.json");

const launchServer = (port) => {
  main(port);
};

// Still Under Development
// const configure = (obj) => {
//   for (const [key, value] of Object.entries(config.env)) {
//     console.log(`${key}: ${value}`);
//   }
// };

module.exports = {
  launchServer,
  //   configure,
};
