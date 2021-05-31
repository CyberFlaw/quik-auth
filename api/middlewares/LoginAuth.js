// Importing Dependencies
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Importing Schema
const config = require("../../utils/config.js");
// const User = require("../../../../../" + config.schemaPath);

router.post("/login", async (req, res) => {
  const loginUser = {
    email: req.body.email,
    password: req.body.password,
  };

  await User.findOne({
    email: loginUser.email,
  })
    .then(async (user) => {
      if (!user) return res.json({ message: "User doesnt exist" });

      const isMatch = await bcrypt.compare(loginUser.password, user.password);

      if (!isMatch)
        return res.status(400).json({ message: "Incorrect Password" });

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.PRIVATE_KEY,
        {
          expiresIn: config.jwt.expiresIn,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ token });
        }
      );
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        message: "Server Error",
      });
    });
});

module.exports = router;
