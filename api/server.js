// Importing packages
const express = require("express");

// Importing files

// Main function
const main = () => {
  const app = express();

  const PORT = process.env.PORT || 8000;

  app.get("/", (req, res) => {
    res.send("Root route");
  });

  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
};

main();
