const express = require("express");
const router = express.Router();
const Saucescontrol = require("../controllers/sauces");
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");

// ok
router.get("/", Saucescontrol.allsauces);
// ok
router.get("/:id", Saucescontrol.idsauces);
//ok
router.post("/", multer, Saucescontrol.postsauces);
// ok
router.put("/:id", Saucescontrol.putidsauces);
// ok
router.delete("/:id", Saucescontrol.deletesauces);

router.post("/:id/like", Saucescontrol.sauceslike);

module.exports = router;
