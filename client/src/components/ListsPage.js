import React, { Component } from 'react';

import store from '../store/index';
import Lists from './Lists';
import ListsMovies from './ListsMovies';
import NewListInput from './NewListInput';

export default class ListsPage extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    noLists() {
        return (
            <div className="no-list-wrapper">
                <div>
                    <div className="no-lists">No Lists Created</div>
                    <NewListInput />
                </div>
            </div>
        )
    }
    showLists() {
        return (
            <div className="lists-page-wrapper">
                <Lists />
                <ListsMovies />
            </div>
        )
    }
    render() {
        const lists = store.getState().lists.length === 0 ? this.noLists() : this.showLists()
        return (
            <div>{lists}</div>
        )
    }
}