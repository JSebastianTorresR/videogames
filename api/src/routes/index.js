const { Router } = require('express');
const {VGRouter} = require("./videogames")
const {GenreRouter} = require("./genre")

const router = Router();

router.use("/videogames", VGRouter)
router.use("/genres", GenreRouter)

module.exports = router;
