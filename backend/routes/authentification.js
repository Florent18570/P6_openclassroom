const express = require("express");
const router = express.Router();
const authcontrol = require("../controllers/authentification.js");

router.post("/apt");

module.exports = router;
