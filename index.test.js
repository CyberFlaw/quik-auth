const { schema } = require("./index");

// Schema Testing
const User = require("./api/models/User");
const {
  schema1,
  schema2,
  schema3,
  schema4,
} = require("./utils/test/testschema");

test("Schema Loading", () => {
  expect(schema()).toBe(User);
  expect(schema(schema1)).toBe(schema1);
  expect(schema(schema2)).toBe(schema2);
  expect(schema(schema3)).toBe(schema3);
  expect(schema(schema4)).toBe(schema4);
});
