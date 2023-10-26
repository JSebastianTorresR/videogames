import axios from "axios";
export const API ="http://localhost:3001/videogames"


const getVideoGames = async (page, sort, genre, filter, origin) =>{
    let parameters = ""
    if(sort) parameters += `&sort=${sort}`
    if(genre) parameters += `&genre=${genre}`
    if(filter) parameters += `&filter=${filter}`
    if(origin) parameters += `&origin=${origin}`
    const {data} = await axios.get(`${API}?page=${page}${parameters}`)
    return data
}

export const getGamesAsync = (currentPage, sort, genre, filter, origin ) => async (dispatch) => {
    try {
        const apiGames = await getVideoGames(currentPage, sort, genre, filter, origin);
        dispatch({
            type: "GET_VIDEOGAMES_SUCCES",
            payload: apiGames,
        });
    } catch (error) {
        dispatch({
            type: "GET_VIDEOGAMES_ERROR",
            error: error.message,
        });
    }
};

const getGenreOptions = async () => {
    const {data} = await axios("http://localhost:3001/genres")
    return data
}

export const getGenreAsync = () => async (dispatch) => {
    try {
        const gr = await getGenreOptions()
        dispatch({
            type: "GET_GR_OPTIONS",
            payload: gr
        })
    } catch (error) {
        dispatch({
            type: "GET_GR_ERROR",
            error: error.message
        })
    }
}

const getGameId = async (id) => {
    const {data} = await axios.get(`${API}/${id}`)
    return data
}

export const getGameIdAsync = (id) => async (dispatch) => {
    try {
        const IdGame = await getGameId(id)
        dispatch({
            type: "GET_ID_GAME",
            payload: IdGame
        })
    } catch (error) {
        dispatch({
            type: "GET_ID_GAME_ERROR",
            error: error.message
        })
    }
}

export const nextPage = () => {
    return {
        type: "NEXT_PAGE"
    }
}

export const prevPage = () => {
    return {
        type: "PREV_PAGE"
    }
}

const search = async (name) =>{
    const {data} = await axios.get(`${API}?name=${name}`)
    return data
}

export const searchGames = (name) => async (dispatch) => {
    try {
        const response = await search(name)
        dispatch({
            type: "SEARCH_RESULT_SUCCES",
            payload: response
        })
    } catch (error) {
        dispatch({
            type: "SEARCH_RESULT_ERROR",
            error: error.message
        })
    }
}

export const setSort = type => {
    return{
        type: "SET_SORT",
        payload: type
    }
}

export const setGenre = type => {
    return{
        type: "SET_GENRE",
        payload: type
    }
}

export const setOrigin = type => {
    return{
        type: "SET_ORIGIN",
        payload: type
    }
}

export const setSearch = (name) => {
    return{
        type: "SET_SEARCH",
        payload: name
    }
}