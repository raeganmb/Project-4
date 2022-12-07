const Artwork = require("../models/artwork");

const controller = "ARTWORK";

// get artwork data as json
async function getArtwork(req, res, next) {
	res.send({
		controller: controller,
		url: req.originalUrl,
		params: req.params,
	});
}

async function saveArtwork(req, res, next) {
	res.send({
		controller: controller,
		url: req.originalUrl,
		params: req.params,
	});
}

async function getRandomArtwork(req, res, next) {
	res.send({
		controller: controller,
		url: req.originalUrl,
		params: req.params,
	});
}

module.exports = {
	getArtwork,
	saveArtwork,
	getRandomArtwork,
};
