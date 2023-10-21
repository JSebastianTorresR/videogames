require('dotenv').config();
const {Genre} = require("../db")
const axios = require("axios");
const { API, API_KEY} = process.env

const fixGenres = (arr) => {
    const genres = []
    for(let i = 0; i < arr.length; i++){
        const {name} = arr[i]
        genres.push(name)
    }
    return genres
}

const getGenresApi = async () => {
    try {
        const {data} = await axios(`${API}/genres?key=${API_KEY}`)
        // if(!data.length) throw new Error("no se pudo obtener generos de la api")
        const {results} = data
        const genres = fixGenres(results)
        const created = await Promise.all(genres.map(genre => Genre.create({name: genre})))
        return created
    } catch (error) {
        throw new Error(`No se han podido obtener los generos; error: ${error.message}`)
    }
}

const getGenresDb = async () => {
    try {
        const genres  = await Genre.findAll()
        if(!genres.length) return
        return genres
    } catch (error) {
        throw new Error(`No se ha podido conectar con la Base de Datos; error: ${error.message}`)
    }
}

const getGenres = async () => {
    try {
        const DB = await getGenresDb()
        if(!DB){
            const genres = await getGenresApi()
            return genres
        }
        return DB
    } catch (error) {
        throw new Error(`No se han obtenido generos; error: ${error.message}`)
    }
}

module.exports = {getGenres}