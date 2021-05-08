const Joi = require("joi");

const registerValidation = async (schema) => {
  const validationSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(12).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  });

  const result = validationSchema.validate(schema);
  console.log(result);
  return result;
};

module.exports.registerValidation = registerValidation;
