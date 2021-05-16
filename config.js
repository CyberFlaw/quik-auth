const config = require("../../../config.json");
const env = require("../../../env.json");

module.exports = {
  env: {
    dbConnect: env.dbConnect,
    privateKey: env.privateKey,
  },
  schemaPath: config.schemaPath,
  jwt: {
    expiresIn: "24h",
  },
};
