const express = require("express");
var bodyParser = require("body-parser");
const userRoutes = require("./Route/router");
const cors = require("cors");

const app = express();
require("./config/dbconfig");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log("server running on 3000");
});
