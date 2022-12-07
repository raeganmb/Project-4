const Controller = require("../controllers/artwork");
const express = require("express");

const router = express.Router();

router.get("/random", Controller.getRandomArtwork);
router.get("/:artwork_id", Controller.getArtwork);
router.get("/:artwork_id/save", Controller.saveArtwork);
module.exports = router;
