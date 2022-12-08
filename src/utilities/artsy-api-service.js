const axios = require("axios");

export async function randomArt() {
	try {
		const res = await axios.get("http://localhost:3001/artwork/random");
		return res.data;
	} catch (err) {
		console.log(err);
		return [];
	}
}

export async function saveArt(artwork_id, user_id) {
	try {
		let params = {
			artwork_id: artwork_id,
			user_id: user_id,
		};
		var resp = await axios.get("http://localhost:3001/artwork/save", {
			params: params,
		});
	} catch (error) {
		console.log(error);
	}
}
