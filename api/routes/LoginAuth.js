const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  await User.findOne({
    email,
  })
    .then((user) => {
      if (!user) return res.json({ message: "User doesnt exist" });
    })
    .then(async (user) => {
      const isMatch = await bcrypt.compare(password, user.password);
    });
});

module.exports = router;
