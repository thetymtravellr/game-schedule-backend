// config
const express = require("express");
const cors = require("cors");
const fs = require('fs');

//get path fo our json file
const dataPath = "./schedule.json";

//initialize express
const app = express();
//set a port for our server
const port = 8080;

//middleware
app.use(express.json());
app.use(cors());

// get all games data from file and parse it
const getGamesData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

// get all games data
app.get("/games", (req, res) => {
  const games = getGamesData();
  res.send(games);
});

//api entry point
app.get("/", (req, res) => {
  res.send("server running");
});

// listen to port
app.listen(port, () => {
  console.log("server is running on port " + port);
});
