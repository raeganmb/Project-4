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
