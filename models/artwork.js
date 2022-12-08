const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const gallerySchema = require("./gallery");
const bcrypt = require("bcrypt");

const artworkSchema = new Schema(
  {
    artwork_id: {
      type: String,
      required: true,
    },
    artist_id: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    galleries: [
      {
        type: Schema.Types.ObjectId,
        ref: "Gallery",
        required: true,
      },
    ],
    gene: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Artwork", artworkSchema);
