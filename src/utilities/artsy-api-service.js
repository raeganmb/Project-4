async function randomArt() {
  const data = {};
  try {
    const res = await axios.get("htttp://localhost:3001/artwork/random", data);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
