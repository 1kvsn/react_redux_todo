import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer);


function reducer(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state, {
				name: action.name,
				id: action.id,
				isDone: action.isDone,
			}]
		case 'TOGGLE_TODO':
			return (
			state.map(todo => 
				todo.id !== action.id ? {...state, isDone: !todo.isDone } : todo)
		)
		case 'DELETE_TODO':
				return (
						state.filter(todo => todo.id !== action.id)
					)
		default:
		return state
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
 
serviceWorker.unregister();
