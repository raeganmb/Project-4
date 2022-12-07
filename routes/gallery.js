const Controller = require("../controllers/gallery");
const express = require("express");

const router = express.Router();

router.get("/create", Controller.newGallery);
router.get("/:gallery_id/delete", Controller.deleteGallery);
router.get("/:gallery_id/:artwork_id/remove", Controller.removeArtwork);
router.get("/:gallery_id/:artwork_id/add", Controller.addArtwork);

module.exports = { router };
