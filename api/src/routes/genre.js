const {getGenresHandler} = require("../handlers/genreHandler")
const {Router} = require("express")

const GenreRouter = Router()

GenreRouter.get("/",getGenresHandler)

module.exports = {GenreRouter}