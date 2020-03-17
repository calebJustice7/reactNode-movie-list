import React from 'react';
import store from '../store/index';

export default class Lists extends React.Component {
    showMovies(list) {
        store.dispatch({
            type: "SHOW_MOVIES",
            list: list
        })
    }
    deleteList = (list) => {
        console.log(store.getState().lists);
        console.log(list);
        store.dispatch({
            type: 'DELETE_LIST',
            list: list
        })
    }
    render() {
        return (
            <div className="lists-wrapper">
                {store.getState().lists.map((item, idx) => (
                    <div key={idx}>
                        <div onClick={() => this.showMovies(item)}>{item.name}</div>
                        <i onClick={() => this.deleteList(item)} className="far fa-trash-alt"></i>
                    </div>
                ))}
            </div>
        )
    }
}