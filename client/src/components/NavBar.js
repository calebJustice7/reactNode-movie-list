import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        }
    }
    changeNavView = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
        if(this.state.clicks % 2 === 0) {
            $('.nav-bar-wrapper').slideUp(400);
            $('.fa-bars').css("transform", "rotateZ(90deg)")
        } else {
            $('.nav-bar-wrapper').slideDown(400);
            $('.fa-bars').css("transform", "rotateZ(00deg)")
        }
    }
    render() {
        return (
            <>
                <div className="nav-bar-wrapper">
                    <div className="left-side">
                        IBDM Movies List
                    </div>
                    <div className="right-side">
                        <Link to="/" className="link">Home</Link>
                        <Link to="/lists-page" className="link">Lists</Link>
                        <Link to="/search-history" className="link">Search History</Link>
                    </div>
                </div>
                <div className="hide-show-nav">
                        <i onClick={this.changeNavView} className="fas fa-bars"></i>
                </div>
            </>
        )
    }
}