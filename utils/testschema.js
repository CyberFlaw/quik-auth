const mongoose = require("mongoose");

const schema1 = new mongoose.Schema(
  {
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

const schema2 = new mongoose.Schema(
  {
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
  { collection: "test" }
);

const schema3 = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      min: 6,
      max: 12,
    },
    hotmail: {
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

const schema4 = new mongoose.Schema(
  {
    nickname: {
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
  },
  { collection: "users" }
);

module.exports = {
  schema1,
  schema2,
  schema3,
  schema4,
};
