const router = require("express").Router();

const auth = require("./auth");

const config = require("../../utils/config.js");
const { User } = config;

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
