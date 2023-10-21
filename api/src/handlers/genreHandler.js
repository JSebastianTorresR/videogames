const {getGenres} = require("../controllers/genreController")

const getGenresHandler = async (req, res) => {
    try {
        const genres = await getGenres()
        return res.status(200).json(genres)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

module.exports = {getGenresHandler}