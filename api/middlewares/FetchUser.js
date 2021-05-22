const router = require("express").Router();

const auth = require("./auth");

const config = require("../../config.js");
// const User = require("../../../../../" + config.schemaPath);
const User = require(config.schemaPath);

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
