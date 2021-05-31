const User = require("../api/models/User");

const schemaConfig = (schema = User) => {
  console.log(schema);
  return schema;
};

module.exports = schemaConfig;
