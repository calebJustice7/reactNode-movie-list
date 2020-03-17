import React from 'react';

import store from '../store/index';

export default class ListsMovies extends React.Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        return(
            <div className="lists-movies-wrapper">
                {store.getState().selectedMovieList.map((item, idx) => (
                    <div key={idx}>
                        <div>{item.Title}</div>
                        <img alt="movie poster" src={item.Poster} />
                    </div>
                ))}
            </div>
        )
    }
}