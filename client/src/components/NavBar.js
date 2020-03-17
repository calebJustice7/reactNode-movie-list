import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
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
            </>
        )
    }
}