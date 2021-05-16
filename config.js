const obj = require("../../../config.json");

module.exports = {
  env: {
    dbConnect: obj.env.dbConnect,
    privateKey: obj.env.privateKey,
  },
  schemaPath: obj.schemaPath,
};
