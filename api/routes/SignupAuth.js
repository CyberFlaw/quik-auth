// Importing dependencies
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");

// Importing files
const User = require("../Models/User");

// Declaring a post route
router.post(
  "/register",
  [
    check("name", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    // Parsing input req schema
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    // Validation implementation
    const errors = validationResult(user);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    // Checking if the email already exists
    try {
      let finduser = await User.findOne({
        email,
      });

      if (finduser) {
        return res.status(400).json({
          msg: "User Already Exists",
        });
      } else {
        // Hashing
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        // Saving user to db
        await user
          .save()
          .then((log) => res.send(log))
          .catch((err) => res.status(400).send(err));
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

module.exports = router;
