require("dotenv").config();

// const config = require("../../../config.json");

module.exports = {
  env: {
    dbConnect: process.env.DB_CONNECT,
    privateKey: process.env.PRIVATE_KEY,
  },
  schemaPath: "../api/models/User",
  jwt: {
    expiresIn: "24h",
  },
};
