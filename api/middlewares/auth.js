const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

module.exports = function (req, res, next) {
  dotenv.config();

  const token = req.header("token");

  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    req.user = decoded.user;

    next();
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Invalid Token" });
  }
};
