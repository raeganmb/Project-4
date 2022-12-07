// const database = require("../models/artist");

// get artwork data as json
async function getArtist(req, res, next) {
	res.send({
		msg: "This is an artist",
		url: req.originalUrl,
	});
}

async function saveArtist(req, res, next) {
	res.send({
		msg: "This is save artwork",
	});
}

async function getRandomArtist(req, res, next) {
	res.send({
		msg: "This is random artwork",
	});
}

module.exports = {
	getArtist,
	saveArtist,
	getRandomArtist,
};
