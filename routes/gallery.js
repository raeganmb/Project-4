const Controller = require("../controllers/gallery");
const express = require("express");

const router = express.Router();

// router.get("/:user_id", Controller.getGallery);
router.get("/delete/", Controller.removeArtwork);
router.get("/", Controller.getGallery);

module.exports = router;
