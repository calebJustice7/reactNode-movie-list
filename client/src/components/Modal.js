import React from 'react';
import $ from 'jquery';
import store from '../store/index';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputVal: '', message: ''}
    }
    inputChange = (e) => {
        this.setState({inputVal: e.target.value})
    }
    closeModal() {
        $(".movies-list-page").removeClass('modal-open');
        $('.modal-wrapper').fadeOut(400);
    }  
    newList = () => {
        if(this.state.inputVal.length === 0) {
            this.setState({inputVal: 'Must Enter A Name' })
        } else {
            store.dispatch({
                type: "ADD_LIST",
                listName: this.state.inputVal
            })
            this.setState({inputVal: ''})
        }
    }
    addToList = (item, idx) => {
        const len = store.getState().lists[idx].movies.length;
        store.dispatch({
            type: "ADD_TO_LIST",
            movie: item,
            index: idx
        })
        if(len === store.getState().lists[idx].movies.length) {
            this.setState({message: 'Movie Already exists in list'})
            setTimeout(() => {this.setState({message: ''})}, 2000)
        } else {
            this.setState({message: 'Movie Added To List'})
            setTimeout(() => {this.setState({message: ''})}, 2000)
        }
    }
    showLists() {
        if(store.getState().lists.length === 0){
            return <div></div>
        } else {
            return (
                store.getState().lists.map((item, idx) => (
                    <div key={idx}>
                        <div className="modal-list-name">{item.name}</div>
                        <button onClick={() => this.addToList(item, idx)}>Add to list</button>
                    </div>
                ))
            )
        }
    }
    render() {
        return (
            <div className="modal-wrapper">
                <div className="modal-content-wrapper">
                    <div className="close" onClick={this.closeModal}>
                        X
                    </div>
                    <div className="new-list-wrapper">
                        <input placeholder="New List Here" onChange={this.inputChange} value={this.state.inputVal} type="text" className="new-list-input" />
                        <button onClick={this.newList}>Create New List</button>
                        <div id="message">{this.state.message}</div>
                    </div>
                    <div className="lists">
                        {this.showLists()}
                    </div>
                </div>
            </div>
        )
    }
}