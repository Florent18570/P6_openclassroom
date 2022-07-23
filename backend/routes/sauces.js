const express = require("express");
const router = express.Router();
const Saucescontrol = require("../controllers/sauces");

router.get("", Saucescontrol.allsauces);

router.get("/:id ", Saucescontrol.idsauces);

router.post("", Saucescontrol.postsauces);

router.put("/:id", Saucescontrol.putidsauces);

router.delete("/:id", Saucescontrol.deletesauces);

router.post("/:id/like", Saucescontrol.sauceslike);

module.exports = router;
