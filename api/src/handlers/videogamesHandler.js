const { getVideoGamesName, getVideoGamesId, postVideoGame} = require("../controllers/videogamesController")


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
    const {name, page} = req.query
    try {
        const data = await getVideoGamesName(name, page)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const postVGHandler = async (req,res) => {
    const {name, platforms, description, image, released, rating, genres} = req.body 
    try {
        const game = await postVideoGame(name, platforms, description, image, released, rating, genres)
        return res.status(200).json(game)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}
module.exports = {
    getVGIdHandler,
    getVGNameHandler,
    postVGHandler
}