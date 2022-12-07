const Gallery = require("../models/gallery");
const controller = "GALLERY";

// get a single gallery by ID
async function getGallery(req, res, next) {
	res.send({
		controller: controller,
		url: req.originalUrl,
		params: req.params,
	});
}

// get a list of galleries associated with use
async function getGalleries(req, res, next) {
	res.send({
		controller: controller,
		url: req.originalUrl,
		params: req.params,
	});
}

// create a new gallery for the user
async function newGallery(req, res, next) {
	res.send({
		controller: controller,
		url: req.originalUrl,
		params: req.params,
	});
}

// delete a gallery from the user
async function deleteGallery(req, res, next) {
	res.send({
		controller: controller,
		url: req.originalUrl,
		params: req.params,
	});
}

// add artwork to the gallery
async function addArtwork(req, res, next) {
	res.send({
		controller: controller,
		url: req.originalUrl,
		params: req.params,
	});
}

// remove artwork from the gallery
async function removeArtwork(req, res, next) {
	res.send({
		controller: controller,
		url: req.originalUrl,
		params: req.params,
	});
}
