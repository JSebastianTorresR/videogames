const { getVGNameHandler, getVGIdHandler, postVGHandler} = require("../handlers/videogamesHandler")
const {Router} = require("express")

const VGRouter = Router()

VGRouter.get("/", getVGNameHandler)
VGRouter.get("/:id", getVGIdHandler)
VGRouter.post("/", postVGHandler)

module.exports = {VGRouter}