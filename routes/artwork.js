const Controller = require("../controllers/artwork");
const express = require("express");

const router = express.Router();

router.get("/random", Controller.getRandomArtwork);
router.get("/save", Controller.saveArtwork);
router.get("/:artwork_id", Controller.getArtwork);
module.exports = router;
