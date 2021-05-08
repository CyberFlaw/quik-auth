// Importing dependencies
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Importing files
const authRoute = require("./routes/SignupAuth");

// Configing dotenv
dotenv.config();

// Main function
const main = () => {
  const app = express();

  const PORT = process.env.PORT || 8000;

  //  Get request on root endpoint
  app.get("/", (req, res) => {
    res.send("Root route");
  });

  //   Using middlewares
  app.use(express.json());

  app.use("/auth/user", authRoute);

  //   Connecting to DB
  //   Setup .env file in root directory and add DB_CONNECT = auth key
  mongoose
    .connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Conneced to DB!"))
    .catch((err) => {
      console.error(err);
      // process.exit()
    });

  //   Starting the server
  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
};

main();
