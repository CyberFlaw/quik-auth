// Importing dependencies
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");

// Importing files
const User = require("../Models/User");

// Declaring a post route
router.post(
  "/register",
  // [
  //     check("name", "Please Enter a Valid Username").not().isEmpty(),
  //     check("email", "Please enter a valid email").isEmail(),
  //     check("password", "Please enter a valid password").isLength({
  //       min: 6,
  //     }),
  // ],
  async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const err = validationResult(user);
    if (!err.isEmpty())
      return res.status(400).json({
        error: err.array(),
      });

    await User.findOne({ email: req.body.email })
      .then(async (log) => {
        if (log)
          return res.status(400).json({
            msg: "User already exist",
          });
        else {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);

          await user
            .save()
            .then(() => res.send({ user: user._id }))
            .catch((err) => res.status(400).send(err));
        }
      })
      .catch((err) => res.status(500).send(err));
  }
);

module.exports = router;
