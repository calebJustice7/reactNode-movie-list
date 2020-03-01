import React from 'react';
import store from '../store';
import Modal from './Modal';
import $ from 'jquery';

export default class MovieItem extends React.Component {
    addToList = () => {
        $(".movies-list-page").addClass('modal-open');
        $('.modal-wrapper').fadeIn(300);
        store.dispatch({
            type: "SELECT_MOVIE",
            movie: this.props.movieInfo
        })
    }
    render() {
        let { Title, Poster} = this.props.movieInfo
        if(Poster) {
            Poster = this.props.movieInfo.Poster === 'N/A' ? <div className="blank-movie-poster">No Movie poster available</div> : <img alt="movie-poster" className="movie-img" src={Poster} /> 
        }
        return (
            <div className="movie-item-wrapper">
                <div className="movie-title">{Title}</div>
                {Poster}
                <button onClick={this.addToList} className="movie-btn add-to-list">Add To List</button>
                <button className="movie-btn additional-info">Additional Info</button>
                <Modal />
            </div>
        )
    }
}