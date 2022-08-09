const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const stuffauthent = require("./routes/authentification.js");
const stuffsauces = require("./routes/sauces.js");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER +
      ":" +
      process.env.DB_PASSWORD +
      "@cluster0.t7gkg.mongodb.net/" +
      process.env.DB_NAME +
      "?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use("/images", express.static(path.join(__dirname, "images")));
app.use(bodyParser.json());

var helmet = require("helmet");
app.use(helmet());

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
