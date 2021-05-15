const router = require("express").Router();

const auth = require("./auth");
const User = require("../Models/User");

router.get("/me", auth, async (req, res) => {
  await User.findById(req.user.id)
    .then((user) => {
      res.json({ user }).status(200);
    })
    .catch(() => {
      res.json({ message: "Server error!" }).status(500);
    });
});

module.exports = router;
