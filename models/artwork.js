const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const gallerySchema = require("./gallery");
const bcrypt = require("bcrypt");

const artworkSchema = new Schema({
	artwork_id: {
		type: String,
		required: true,
	},
	title: String,
	category: String,
	medium: String,
	date: String,
	image_details: {
		image_versions: [String],
		image_link: { href: String },
		thumbnail: { href: String },
	},
});

module.exports = mongoose.model("Artwork", artworkSchema);
