//Install express server
const express = require("express");
const path = require("path");

const app = express();

var client = require("redis").createClient(process.env.REDIS_URL);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/bernadet-presents"));

app.get("/api/names", function(req, res) {
  client.lrange("names", 0, -1, function(error, result) {
    if (error) {
      console.error(error);
      throw error;
    }
    res.send({ result: result });
  });
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/bernadet-presents/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
