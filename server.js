const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

require("dotenv").config();
require("./config/database");
const port = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));
app.use("/api/users", require("./routes/api/users"));

// routers
// const artistRouter = require("./routes/artist");
// const galleryRouter = require("./routes/gallery");
const artworkRouter = require("./routes/artwork");

// App routes
app.use("/artwork", artworkRouter);

// Client serving
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
	console.log(`Express app running on port ${port}`);
});
