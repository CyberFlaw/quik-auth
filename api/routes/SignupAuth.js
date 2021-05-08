// Importing dependencies
const router = require("express").Router();
const User = require("../Models/User");

// Declaring a post route
router.post("/register", async (req, res) => {
  // Parsing input req schema
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  // Saving user to db
  const saveUser = await user
    .save()
    .then((log) => res.send(log))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
