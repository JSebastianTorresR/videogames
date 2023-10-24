import axios from "axios";
export const API ="http://localhost:3001/videogames"


const getVideoGames = async (page) =>{
    const {data} = await axios.get(`${API}?page=${page}`)
    return data
}

export const getGamesAsync = (currentPage) => async (dispatch) => {
    try {
        const apiGames = await getVideoGames(currentPage);
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