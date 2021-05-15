// Importing Dependencies
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// Importing Schema
const User = require("../Models/User");

router.post("/login", async (req, res) => {
  const loginUser = {
    email: req.body.email,
    password: req.body.password,
  };

  await User.findOne({
    email: loginUser.email,
  })
    .then(async (user) => {
      dotenv.config();

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
          expiresIn: "24h",
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
