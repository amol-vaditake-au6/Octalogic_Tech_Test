const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    imgURL: {
      type: String,
      required: true,
      trim: true,
    },
    specification: [],
  },
  {
    timestamps: true,
  }
);

const car = mongoose.model("car", carSchema);

module.exports = car;
