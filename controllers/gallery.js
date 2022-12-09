const Gallery = require("../models/gallery");
const User = require("../models/user");
const mongoose = require("mongoose");
const { query } = require("express");
const controller = "GALLERY";

// get a single gallery by ID
async function getGallery(req, resp, next) {
  let gallery = await Gallery.find({
    user: new mongoose.Types.ObjectId(req.query.user_id),
  }).populate("artworks");

  if (gallery[0]) {
    resp.send(
      gallery[0].artworks.map((artwork) => {
        artwork["_id"] = artwork["_id"].toString();
        return artwork;
      })
    );
  } else {
    let user = await User.findById("63923eb516fc5aabe531afe1");
    gallery = new Gallery({ user: user });
    await gallery.save();
    resp.send([]);
  }
}

// remove artwork from the gallery
async function removeArtwork(req, res, next) {
  console.log(req.query);
  try {
    let dbQuery = await Gallery.find({
      user: mongoose.Types.ObjectId(req.query.user_id),
    }).populate("artworks");

    let gallery = dbQuery[0];

    console.log("Count:\t" + gallery.artworks.length);

    let artworks = gallery.artworks.filter((artwork, ind) => {
      console.log("ind\t" + artwork.artwork_id);
      return artwork.artwork_id != req.query.artwork_id;
    });

    gallery.artworks = artworks;
    await gallery.save();
  } catch (error) {}
}

module.exports = {
  getGallery,
  removeArtwork,
};
