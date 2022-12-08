const { compare } = require("bcrypt");
const { isCompositeComponent } = require("react-dom/test-utils");
const Artwork = require("../models/artwork");
const Gallery = require("../models/gallery");
const User = require("../models/user");
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
	let artwork_def = {
		artwork_id: req.query.artwork_id,
	};
	try {
		let artwork = new Artwork(artwork_def);
		await artwork.save();

		var searchRes = await Gallery.find({
			user_id: req.query.user_id,
		});

		gallery = searchRes[0];
		if (!gallery) {
			gallery = new Gallery({
				user: req.query.user_id,
			});

			await gallery.save();
		}

		gallery.artworks.push(artwork);
		gallery.save();
	} catch (error) {
		console.log(error);
	}
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
