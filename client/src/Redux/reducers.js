const initialState = {
    currentPage: 1,
    elementsPerPage: 15,
    videoGames: [],
    favorites: [],
    currentGame: {},
    search: "",
    searchResults: []
}

const Reducer = (state = initialState, action) => {
    switch (action.type){
        case "GET_VIDEOGAMES_SUCCES":
            return {
                ...state,
                videoGames: action.payload
            }
        case "GET_ID_GAME":
            return{
                ...state,
                currentGame: action.payload
            }
        case "NEXT_PAGE":
            return{
                ...state,
                currentPage: state.currentPage + 1
            }
        case "PREV_PAGE":
            if(state.currentPage === 1) return state
            return{
                ...state,
                currentPage: state.currentPage -1
            }
        case  "SET_SEARCH":
            return {
                ...state,
                search: action.payload
            }
        case "SEARCH_RESULT_SUCCES":
            return{
                ...state,
                searchResults: action.payload
            }
        default:
            return state
        }
}

export default Reducer