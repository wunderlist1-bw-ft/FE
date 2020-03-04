import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from '../Dashboard'
import PrivateRoute from '../PrivateRoute'

const LoginSignup = props => {
    return (
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
    );
}

export default LoginSignup;