import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import {reducer} from './reducers/reducer'

import './index.css';
import App from './App';

//add logger later
const store = createStore(reducer, applyMiddleware());
console.log('getting state', store.getState())


ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

