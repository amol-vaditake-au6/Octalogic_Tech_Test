const express = require("express");
const seeding = require("./seed");
const cors = require("cors");
require("./db");

const app = express();

// Runnign seeding function for seed the data
seeding();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: ["Content-Type"],
  })
);

app.use(require("./routes/carRoute"));

app.get("/", function (req, res) {
  return res.send("Your are connected to server successfully");
});

app.listen(1234, function () {
  console.log("Server started");
});
