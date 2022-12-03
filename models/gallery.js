const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = require("./user");
const artworkSchema = require("./artwork");
const bcrypt = require("bcrypt");

const gallerySchema = new Schema(
  {
    gallery: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    artwork: {
      type: Schema.Types.ObjectId,
      ref: "Artwork",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Gallery", gallerySchema);
