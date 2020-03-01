import React from 'react'
import store from '../store';
import { Link } from 'react-router-dom';

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ''
        }
    }
    componentDidMount() {
        fetch('/').then(res => console.log(res));
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    updateVal = (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }
    searchMovie = () => {
        fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=${this.state.inputVal}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key": "672e71f89emsh8fc41052f8d3281p177d4cjsn86ebdbc19af9"
            }
        })
        .then(res => res.json())
        .then(json => {
            store.dispatch({
                type: "SEARCH_MOVIE",
                results: json
            })
        })
        this.setState({
            inputVal: ''
        })
    }
    render() {
        return (
            <div className="search-page-wrapper">
  
                <div className="search-bar-wrapper">
                    <div>Search Your Favorite Movies</div>
                    <input onChange={this.updateVal} value={this.state.inputVal} />
                    <Link to="/view-listings"className="link"><button onClick={this.searchMovie}>Search</button></Link>
                </div>
            </div>
        )
    }
}