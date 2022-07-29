const express = require("express");
const router = express.Router();
const Saucescontrol = require("../controllers/sauces");
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");

// ok
router.get("/", auth, Saucescontrol.allsauces);
// ok
router.get("/:id", auth, Saucescontrol.idsauces);
//ok
router.post("/", auth, multer, Saucescontrol.postsauces);
// ok
router.put("/:id", auth, Saucescontrol.putidsauces);
// ok
router.delete("/:id", auth, Saucescontrol.deletesauces);

router.post("/:id/like", Saucescontrol.sauceslike);

module.exports = router;
