require('dotenv').config();
const {Videogame, Genre} = require("../db")
const axios = require("axios")
const { API, API_KEY} = process.env

const games = []

const fixResults = (obj) =>{
    return {
        id: obj.id,
        name: obj.name,
        platforms: fixPlatforms(obj.platforms),
        image: obj.background_image,
        released: obj.released,
        rating: obj.rating,
        genres: fixGenres(obj.genres),
        origin: "API"
    }
}

const fixGenres = (arr) => {
    const genres = []
    for(let i = 0; i < arr.length; i++){
        const {name} = arr[i]
        genres.push(name)
    }
    return genres
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

const getVideoGamesApi = async (page=1, sort=null, filter=null, genre=null) => {
    try {
        if(!games.length){
            for(let i = 1; i <= 5; i++){
                const {data} = await axios(`${API}/games?page=${i}&key=${API_KEY}`)
                const {results} = data
                for(let i = 0; i < results.length; i++){
                    games.push(fixResults(results[i]))
                }
            }
        }
        const slice = (page - 1) * 15

        let copyGames
        let genreFilter

        if(filter){
            if (genre){
                genreFilter = games.filter(game => game.genres.some(gr => gr == genre))}
            copyGames = [...genreFilter]
        }

        switch(sort){
            case "A-Z":
                return copyGames.sort(function (x, y) {
                    if (x.name < y.name) {
                        return -1;
                    }
                    if (x.name > y.name) {
                        return 1;
                    }
                    return 0;}).slice(slice, 15*page)

            case "Z-A":
                return copyGames.sort(function (x, y) {
                    if (x.name < y.name) {
                        return 1;
                    }
                    if (x.name > y.name) {
                        return -1;
                    }
                    return 0;}).slice(slice, 15*page)
            case "5-0":
                return copyGames.sort(function (x, y) {
                    if (x.rating < y.rating) {
                        return 1;
                    }
                    if (x.rating > y.rating) {
                        return -1;
                    }
                    return 0;}).slice(slice, 15*page)
            case "0-5":
                return copyGames.sort(function (x, y) {
                    if (x.rating < y.rating) {
                        return -1;
                    }
                    if (x.rating > y.rating) {
                        return 1;
                    }
                    return 0;}).slice(slice, 15*page)
            default:
                if(filter) return copyGames.slice(slice, 15*page)
                return games.slice(slice, 15*page)
                    
        }
    } catch (error) {
        throw new Error(`No se ha podido conectar a la API; error: ${error.message}`)
    }
}

const getVideoGamesId = async (id) => {
    try {
        if(!games.length) await getVideoGamesApi()
        for(let i = 0; i<= games.length; i++){
            if(games[i].id==id) return games[i]
    }
        throw new Error("No se encontro juego")
    } catch (error) {
        throw new Error(`No se ha encontrado juego con ID ${id}; error: ${error.message}`)
    } 
}

const getVideoGamesName = async (name, page=1, sort, filter, genre, origin) => {
    try {
        if(!games.length) {
            let response = await getVideoGamesApi(page, sort, filter, genre, origin)
            if(!name) return response
        }
        if(name){
            const search = games.filter(game => game.name.toLowerCase().includes(name.toLowerCase()))
            if(!search.length) throw new Error("No se encontraron coincidencias ")
            if(search.length) return search
        }
        if(!name) return getVideoGamesApi(page, sort, filter, genre, origin)
    } catch (error) {
        throw new Error(`No se ha encontrado el juego ${name}, error: ${error.message}`)
    }
}   

const postVideoGame = async (name, platforms, description, image, released, rating, genres) => {
    try {
        const game  = await Videogame.create({name, platforms, description, image, released, rating})
        await Promise.all(genres.map(async (genre) => {
            const DBGenre = await Genre.findOne({ where: { name: genre}})
            game.addGenre(DBGenre)
        }))
        return game
    } catch (error) {
        throw new Error(`No se ha podido crear el Juego ${name}, error: ${error.message}`)
    }
}



module.exports = {
    getVideoGamesName,
    getVideoGamesId,
    getVideoGamesApi,
    postVideoGame
}