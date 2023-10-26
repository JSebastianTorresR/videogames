const initialState = {
    currentPage: 1,
    videoGames: [],
    favorites: [],
    currentGame: {},
    search: "",
    searchResults: [],
    filter: 1,
    sort: null,
    genre: null,
    origin: null,
    optionGenre: []
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
            if(state.currentPage === 7) return state
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
            if(state.search.length <1) return{...state, searchResults: []}
            return{
                ...state,
                searchResults: action.payload
            }
        case  "SET_GENRE":
            return {
                ...state,
                genre: action.payload
            }
        case  "SET_SORT":
            return {
                ...state,
                sort: action.payload
            }
        case  "SET_ORIGIN":
            return {
                ...state,
                origin: action.payload
            }
        case  "GET_GR_OPTIONS":
            return {
                ...state,
                optionGenre: action.payload
            }
        default:
            return state
        }
}

export default Reducer