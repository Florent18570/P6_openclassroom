const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

const stuffauthent = require("./routes/authentification.js");
const stuffsauces = require("./routes/sauces.js");

mongoose
  .connect(
    "mongodb+srv://flo:flo@cluster0.t7gkg.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/auth", stuffauthent);
app.use("/api/sauces", stuffsauces);

module.exports = app;
