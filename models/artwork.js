const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const gallerySchema = require("./gallery");
const bcrypt = require("bcrypt");

const artworkSchema = new Schema({
	artwork_id: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Artwork", artworkSchema);
