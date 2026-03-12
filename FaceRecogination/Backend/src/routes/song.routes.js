const {Router} = require("express")
const uplaod = require("../middlewares/upload.middlewars")
const songContollers = require("../controllers/song.controllers")
const router = Router()

router.post("/" , uplaod.single("song") ,songContollers.uploadSong )

module.exports = router