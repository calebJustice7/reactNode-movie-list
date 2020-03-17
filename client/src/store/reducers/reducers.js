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
        let idx = state.lists[action.index].movies.indexOf(state.selectedMovie);
        if(idx === -1) {
            state.lists[action.index].movies.push(state.selectedMovie);
        } else {
            return state;
        }
        return state;
    }
    else if(action.type === "SELECT_MOVIE"){ 
        return  {
            ...state,
            selectedMovie: action.movie
        }
    }
    else if(action.type === "SHOW_MOVIES") {
        let index = state.lists.indexOf(action.list);
        return {
            ...state,
            selectedMovieList: state.lists[index].movies
        }
    }
    else if(action.type === "DELETE_LIST") {
        return {
            ...state,
            lists: state.lists.filter(list => {
                return list !== action.list;
            })
        }
    }
    else {
        return state;
    }
}

export default reducer;