import { initState } from '../index';

const reducer = (state = initState, action) => {
    if(action.type === "SEARCH_MOVIE") {
        return {
            ...state,
            loaded: true,
            results: action.results
        }
    } 
    else if(action.type === "ADD_LIST") {
        
        return {
            ...state,
            lists: state.lists.concat({
                name: action.listName,
                movies: []
            })
        }
    }
    else if(action.type === "ADD_TO_LIST") {
        state.lists[action.index].movies.push(state.selectedMovie);
        return state;
    }
    else if(action.type === "SELECT_MOVIE"){ 
        return  {
            ...state,
            selectedMovie: action.movie
        }
    }
    else {
        return state;
    }
}

export default reducer;