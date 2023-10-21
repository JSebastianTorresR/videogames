const { getVideoGamesApi, getVideoGamesName, getVideoGamesId, postVideoGame} = require("../controllers/videogamesController")

const getVGApiHandler = async (req, res) => {
    try {
        const data = await getVideoGamesApi()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}
const getVGIdHandler = async (req, res) => {
    const {id} = req.params
    try {
        const data = await getVideoGamesId(id)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}
const getVGNameHandler = async (req, res) => {
    const {name} = req.query
    try {
        const data = await getVideoGamesName(name)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const postVGHandler = async (req,res) => {
    const {name, platforms, image, released, rating, genres} = req.body 
    try {
        const game = await postVideoGame(name, platforms, image, released, rating, genres)
        return res.status(200).json(game)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}
module.exports = {
    getVGApiHandler,
    getVGIdHandler,
    getVGNameHandler,
    postVGHandler
}