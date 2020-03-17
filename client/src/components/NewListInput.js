import React from 'react';
import store from '../store/index';

export default class NewListInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }
    handleSubmit = () => {
        store.dispatch({
            type: 'ADD_LIST',
            listName: this.state.inputVal
        })
        this.setState({
            inputVal: ''
        })
    }
    render() {
        return (
            <div className="new-list-wrapper">
                <input value={this.state.inputVal} onChange={this.handleChange} type="text" placeholder="Create New List..." />
                <button onClick={this.handleSubmit}>Create</button>
            </div>
        )
    }
}