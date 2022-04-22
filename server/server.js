const path = require("path");
const express = require("express");
const cors = require("cors")
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "../build");

app.use(express.static(publicPath));

app.use(cors({
  origin: "*"
}));

app.get("/api", cors(), (req, res) => {
		try {
      res.json({ title: "Feed ... From Server With Love" });
		}
		catch(error) {
			console.log(error);
		}
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});