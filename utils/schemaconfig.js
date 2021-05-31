const User = require("../api/models/User");

const schemaConfig = (schema = User) => {
  return schema;
};

module.exports = schemaConfig;
