const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

const stuffauthent = require("./routes/authentification.js");

app.use(bodyParser.json());
app.use("/api/auth/", stuffauthent);

module.exports = app;
