const express = require("express");
const router = express.Router();
const authcontrol = require("../controllers/authentification.js");

router.post("/signup", authcontrol.signup);

router.post("/login", authcontrol.login);

module.exports = router;
