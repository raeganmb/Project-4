const Gallery = require("../models/gallery");
const controller = "GALLERY";

// get a single gallery by ID
async function getGallery(req, resp, next) {
	let gallery = await Gallery.find({ user_id: req.query.user_id }).populate(
		"artworks"
	);
	console.log(
		gallery[0].artworks.map((artwork) => {
			artwork["_id"] = artwork["_id"].toString();
			return artwork;
		})
	);

	resp.send(
		gallery[0].artworks.map((artwork) => {
			artwork["_id"] = artwork["_id"].toString();
			return artwork;
		})
	);
}

// remove artwork from the gallery
async function removeArtwork(req, res, next) {
	let gallery = await Gallery.find({ user_id: req.query.user_id }).populate(
		"artworks"
	);

	resp.send(
		gallery[0].artworks.map((artwork) => {
			artwork["_id"] = artwork["_id"].toString();
			return artwork;
		})
	);
}

module.exports = {
	getGallery,
	removeArtwork,
};
