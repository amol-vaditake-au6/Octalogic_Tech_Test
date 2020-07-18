const express = require("express");
const seeding = require("./seed");
require("./db");
const app = express();
seeding();

app.use(require("./routes/carRoute"));

app.get("/", function (req, res) {
  return res.send("Your are connected to server successfully");
});

app.listen(1234, function () {
  console.log("Server started");
});
