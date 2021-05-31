const main = require("./api/server");
const auth = require("./api/middlewares/auth");
require("dotenv").config();

const launchServer = (port) => {
  main(port);
};

// module.exports = {
//   launchServer,
//   auth,
// };

launchServer(8000);
