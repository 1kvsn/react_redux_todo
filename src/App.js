import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

function uuid() { 
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}



class App extends Component {
  constructor() {
    super()
    this.state = {
      todoInput: "",
    }
  }

  handleSubmit = (e) => {
    this.setState({
      todoInput: e.target.value
    })
  }

  handleButton = () => {
    if(this.state.todoInput !== "") {
      this.props.dispatch({type: 'ADD_TODO', name: this.state.todoInput, id: uuid(), isDone: false,})
      this.setState({todoInput: ""})
    } 
  }

  handleCheck = (id) => {
    this.props.dispatch({type: 'TOGGLE_TODO', id})
  }

  handleDelete = (id) => {
    this.props.dispatch({type: 'DELETE_TODO', id: id,})
  }

  render() {
    return (
      <div className="parent">
        <div className="input-container">
          <input onChange={this.handleSubmit} value={this.state.todoInput} placeholder="Enter todos here..."></input>
          <button type="button" onClick={this.handleButton}>Submit</button>
        </div>
        <div className="list-container">
          <ul className="list">
            {
              this.props.anythinggoeshere.map(todo => {
                return (
                  <div className="list-items">
                    <input type="checkbox" value={this.state.checkbox} onChange={this.handleCheck}></input>
                    <li>{todo.name} </li>
                    <p onClick={() => this.handleDelete(todo.id)}> -|x|-</p>
                  </div>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    anythinggoeshere: state
  }
}

export default connect(mapStateToProps)(App);

