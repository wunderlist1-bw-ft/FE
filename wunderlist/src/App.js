import React from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import LoginSignup from "./components/onboarding/LoginSignup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router } from "react-router-dom";

import Signup from "./components/onboarding/Signup";
import Login from "./components/onboarding/Login";
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'

import './App.css';

function App() {


  return (
    <Router >
    <div className="login-signup-container">
            <div className="login-signup">
                <h1><FontAwesomeIcon icon={faTasks} /> Wunderlist</h1>
                <div className="login-signup-links">
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                </div>
                <Switch>
                  <PrivateRoute exact path='/dashboard' component={Dashboard} />
                  <Route path="/login" render={props => <Login {...props} />} />
                  <Route path="/signup" render={props => <Signup {...props} />} />
                </Switch>
            </div>
        </div>
    </Router>
  );
}

export default App;