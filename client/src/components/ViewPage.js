import React from 'react';
import { Link } from 'react-router-dom';
import store from '../store/index';
import MovieItem from './MovieItem';

export default class ViewPage extends React.Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        if(!store.getState().loaded) {
            return (
                <div className="loading-wrapper">
                    <div className="loading"></div>
                </div>
            )
        } else {
            if(store.getState().results.Error){
                return <div className="error-page">
                    <div>
                        <div>Error occured</div>
                        <Link className="link" to="/">Back to home</Link>
                    </div>
                </div>
            }
            else if(store.getState().results.Search.length > 0) {
                return (
                    <div className="movies-list-page">
                        {store.getState().results.Search.map((itm, idx) => (
                            <MovieItem key={idx} movieInfo={itm}/>
                        ))}
                    </div>
                )
            }
        }
    }
}