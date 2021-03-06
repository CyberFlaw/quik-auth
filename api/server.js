// Importing dependencies
const express = require("express");
const mongoose = require("mongoose");

// Importing files
const registerRoute = require("./middlewares/RegisterAuth");
const loginRoute = require("./middlewares/LoginAuth");
const fetchUser = require("./middlewares/FetchUser");

// Configing env variables
require("dotenv").config();

// Main function
const main = (port, app) => {
  // const app = express();

  const PORT = process.env.PORT || port;

  //  Get request on root endpoint
  // app.get("/", (_, res) => {
  //   res.json({
  //     message: "Api Working!",
  //   });
  // });

  //   Using middlewares
  app.use(express.json());

  //   Connecting to DB
  mongoose
    .connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("[Status] Connected To Database"))
    .catch((err) => {
      console.error(err);
      process.exit();
    });

  app.use("/auth/user", registerRoute);
  app.use("/auth/user", loginRoute);
  app.use("/auth/user", fetchUser);

  //   Starting the server
  app.listen(PORT, () => {
    console.log(`[Status] Server started at port ${PORT}`);
  });
};

module.exports = main;
