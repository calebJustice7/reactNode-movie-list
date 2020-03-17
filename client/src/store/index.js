import { createStore } from 'redux';
import reducer from './reducers/reducers';

export const initState = {
    loaded: false,
    results: [],
    lists: [],
    selectedMovie: {},
    selectedMovieList: []
}

const store = createStore(reducer);

export default store;