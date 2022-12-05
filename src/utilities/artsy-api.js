const axios = require("axios");
const logger = require("./log_console");

const clientID = "db9291e3c57a14947867";
const clientSecret = "5917d3fcd83574491ab9c11c753c864e";
const tokenURL = "https://api.artsy.net/api/tokens/xapp_token";

class ArtClient {
	constructor() {
		this.latest = 0;
		this.token = {};

		(async () => {
			await this.ensureValidSession();
		})().catch((err) => {
			console.error(err);
		});
	}

	// ensure session is valid
	async ensureValidSession() {
		if (!this.isValidToken() || !this.token) {
			try {
				await this.refreshToken();
			} catch (error) {
				console.log("failed to refresh session");
			}
		}
		await this.rateLimit();
	}

	// ratelimit for api calls
	async rateLimit() {
		let delta = 250 - (new Date() - this.latest);

		if (delta > 0) {
			setTimeout(() => {}, delta);
		}
	}

	// check if current tokenis valid
	isValidToken() {
		let date = new Date();
		return date < Date(this.token.expires_at);
	}

	// refresh token
	async refreshToken() {
		try {
			var data = {
				client_id: clientID,
				client_secret: clientSecret,
			};
			var response = await axios({
				method: "post",
				url: tokenURL,
				data: data,
				headers: {
					"Content-Type": "application/json",
				},
			});
		} catch (error) {
			console.log("Failed to get fresh token");
		}

		this.token = response.data;
		this.headers = {
			"X-XAPP-Token": this.token.token,
		};
	}

	async getArtwork(params) {
		await this.ensureValidSession();

		let url = `https://api.artsy.net/api/artists`;
		let resp = await axios.get(url, {
			headers: this.headers,
			params: params,
		});

		if (params.artwork_id) {
			return resp.data;
		}

		return resp._embedded.artworks;
	}

	async getArtist(params) {
		await this.ensureValidSession();

		let url = `https://api.artsy.net/api/artists`;
		let resp = await axios.get(url, {
			params: params,
			headers: this.headers,
		});

		if (params.artist_id) {
			return resp.data;
		}

		return resp.data._embedded.artists;
	}

	async getGenes(params) {
		await this.ensureValidSession();

		let url = "https://api.artsy.net/api/genes";
		let resp = await axios.get(url, {
			params: params,
			headers: this.headers,
		});

		return resp.data;
	}

	getArtistParamsTemplate() {
		return {
			artist_id: "artist_id: String, retrieve an artist with this specific id",
			artwork_id: "artwork_id: String, retrieve artists for a given artwork",
			similar_to_artist_id:
				"similar_to_artist_id: String, Return artists similar to a given artist",
			gene_id:
				"gene_id: String, Return a set of artists that represents a given gene",
			artworks: "artworks: Boolean, only return artists with published artworks",
			size: "Integer, number of items to retrieve",
			offset: "integer, number of items to skip",
		};
	}

	getArtworkParamsTemplate() {
		return {
			artwork_id: "artwork_id: String, retreive this specific artwork data",
			artist_id: "artwork_id: String, retrive artworks by a given artist",
			size: "Integer, number of items to retrieve",
			offset: "integer, number of items to skip",
		};
	}

	getGenesParamsTemplate() {
		return {
			artist_id: "String, retrieve genes for a given artist",
			artwork_id: "String, retrieve genes for a given artwork",
		};
	}

	parseArtist(artist) {
		res = {};

		res.id = artist.id;
		res.name = artist.name;
		return res;
	}

	parseArtwork(artwork) {
		res = {};

		res.id = artwork.id;
		res.title = artwork.title;
		res.category;
		res.medium;
		res.date;
		res.addition_information;
		res.thumbnail;
		res.image_details = {
			image_versions: artwork.image_versions,
			image_link: artwork._links.image,
			thumbnail: artwork._links.thumbnail,
		};
		res.similar_artworks;
		res.gene;

		return res;
	}
}

const client = new ArtClient();

module.exports = {
	client,
};
// export const artsyClient = ArtsyClient();
// export default artsyClient;

/*
    EndPoints
    - Artwork
    - Artist
    - Search

    Keys
    - artist_id
    - artwork_id

    
    Artist -> Artwork: query Artwork with param artist_id
    Artwork -> Artist: query Artist with param artwork_id

    


*/
