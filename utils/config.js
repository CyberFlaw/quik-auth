const schemaConfig = require("./schemaconfig");
require("dotenv").config();

// Just for testing purpose
const schema = schemaConfig();

module.exports = {
  env: {
    dbConnect: process.env.DB_CONNECT,
    privateKey: process.env.PRIVATE_KEY,
  },
  User: schema,
  jwt: {
    expiresIn: "24h",
  },
};
