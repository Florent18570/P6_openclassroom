const express = require("express");
const router = express.Router();
const Saucescontrol = require("../controllers/sauces");
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");

router.get("/", Saucescontrol.allsauces);

router.get("/:id ", auth, Saucescontrol.idsauces);

router.post("/", multer, Saucescontrol.postsauces);

router.put("/:id", auth, Saucescontrol.putidsauces);

router.delete("/:id", auth, Saucescontrol.deletesauces);

router.post("/:id/like", auth, Saucescontrol.sauceslike);

module.exports = router;
