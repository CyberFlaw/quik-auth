// const config = require("../../../config.json");
// const env = require("../../../env.json");

const config = require("./config.json");
const env = require("./env.json");

module.exports = {
  env: {
    dbConnect: env.dbConnect,
    privateKey: env.privateKey,
  },
  schemaPath: config.schemaPath || "../models/User.js",
  jwt: {
    expiresIn: "24h",
  },
};

//    config.schemaPath || "node_modules/@cyberflaw/express-mongodb-jwt/api/Models/User",
