const Controller = require("../controllers/artist");
const express = require("express");

const router = express.Router();

router.get("/:artist_id", Controller.getArtist);

module.exports = { router };
