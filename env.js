const config = require("./config.js");

process.env.DB_CONNECT = config.env.dbConnect;
process.env.PRIVATE_KEY = config.env.privateKey;

module.exports = process.env.DB_CONNECT;
module.exports = process.env.PRIVATE_KEY;
