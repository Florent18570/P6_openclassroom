const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

const stuffauthent = require("./routes/authentification.js");

mongoose
  .connect(
    "mongodb+srv://flo:flo@cluster0.t7gkg.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(bodyParser.json());
app.use("/api/auth/", stuffauthent);

module.exports = app;
