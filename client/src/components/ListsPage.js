import React, { Component } from 'react';
import store from '../store/index';

export default class ListsPage extends Component {
    render() {
        console.log(store.getState().lists);
        return (
            <div>
                state
            </div>
        )
    }
}