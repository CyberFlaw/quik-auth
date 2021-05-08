// Importing dependencies
const router = require("express").Router();
const bcrypt = require("bcrypt");

// Importing Schema
const User = require("../Models/User");

const handleDatabaseOperation = async (user, req, res) => {
  await User.findOne({ email: user.email })
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
};

// Declaring a post route
router.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const { error } = registerValidation(user);
  console.log(error + "\n");

  try {
    handleDatabaseOperation(user, req, res);
  } catch (err) {
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
