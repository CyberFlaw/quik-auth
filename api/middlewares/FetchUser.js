const router = require("express").Router();

const auth = require("./auth");

<<<<<<< HEAD
const config = require("../../config.js");
// const User = require("../../../../../" + config.schemaPath);
const User = require(config.schemaPath);
=======
const config = require("../../utils/config.js");
// const User = require("../../../../../" + config.schemaPath);
>>>>>>> 60d24ebbae50a8e44a2ad1c6024e47e6d8140cbf

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
