import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


import { todoReducer } from './reducers/reducer'

import './index.css';
import App from './App';



const store = createStore(todoReducer, applyMiddleware(logger, thunk))
//console.log("getting state", store.getState());

ReactDOM.render(
<Provider store={store}>
        <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

