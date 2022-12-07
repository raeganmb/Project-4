const Artwork = require("../models/artwork");
const API = require("../src/utilities/artsy-api");
const controller = "ARTWORK";

// get artwork data as json
async function getArtwork(req, resp, next) {
	if (req.params.artwork_id === "artwork_id") {
		var params = {
			artwork_id: "516dfb9ab31e2b2270000c45",
		};
	}

	var result = await API.getArtwork(params);
	resp.send(result);
}

async function saveArtwork(req, res, next) {
	res.send({
		controller: controller,
		url: req.originalUrl,
		params: req.params,
	});
}

async function getRandomArtwork(req, resp, next) {
	let params = {
		offset: Math.floor(Math.random() * 50),
	};
	let result = await API.getArtwork(params);

	resp.send(result);
}

module.exports = {
	getArtwork,
	saveArtwork,
	getRandomArtwork,
};
