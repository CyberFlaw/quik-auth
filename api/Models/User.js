// Importing dependencies
const mongoose = require("mongoose");

// Defining post schema
const userSchema = new mongoose.Schema(
  {
    // Edit the schema for your needs
    name: {
      type: String,
      required: true,
      min: 6,
      max: 12,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 32,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 124,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "users" }
);

module.exports = mongoose.model("User", userSchema);
