require('dotenv').config();
const {videogames} = require("../db")
const axios = require("axios")
const { API, API_KEY} = process.env

const fixResults = (obj) =>{
    return {
        id: obj.id,
        name: obj.name,
        platforms: fixPlatforms(obj.platforms),
        image: obj.background_image,
        released: obj.released,
        rating: obj.rating
    }
}
const fixPlatforms = (arr) =>{
    const platforms = []
    for(let i = 0; i < arr.length; i++){
        const {platform} = arr[i]
        const {name} = platform
        platforms.push(name)
    }
    return platforms
}

const getVideoGamesApi = async () => {
    try {
        const {data} = await axios(`${API}/games?key=${API_KEY}`)
        const {results} = data
        const videogames = []
        for(let i = 0; i < results.length; i++){
            videogames.push(fixResults(results[i]))
        }
        return videogames
    } catch (error) {
        throw new Error(`No se ha podido conectar a la API ${error.message}`)
    }
}

const getVideoGamesId = async (id) => {
    try {
        const {data} = await axios(`${API}/games/${id}?key=${API_KEY}`)
        const videogame = fixResults(data)
        return videogame
    } catch (error) {
        throw new Error(`No se ha podido conectar a la API ${error.message}`)
    }
}

const getVideoGamesName = async (name) => {
    try {
        const {data} = await axios(`${API}/games?search=${name}?key=${API_KEY}`)
        const videogame = fixResults(data)
        return videogame
    } catch (error) {
        throw new Error(`No se ha podido conectar a la API ${error.message}`)
    }
}   