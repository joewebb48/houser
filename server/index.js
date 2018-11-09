const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const hc = require("./controller");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
const { CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(db => {
    console.log("database is connected");
    app.set("db", db);
  })
  .catch(err => {
    console.log("there was an error", err);
  });

app.get("/api/houses", hc.getHouses);
app.post("/api/houses", hc.addHouses);
app.delete("/api/houses/:id", hc.deleteMovie);

app.listen(3000, () => {
  console.log("Listening");
});
