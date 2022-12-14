const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = require("./user");
const artworkSchema = require("./artwork");
const bcrypt = require("bcrypt");

const gallerySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    artworks: {
      type: [Schema.Types.ObjectId],
      ref: "Artwork",
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Gallery", gallerySchema);
