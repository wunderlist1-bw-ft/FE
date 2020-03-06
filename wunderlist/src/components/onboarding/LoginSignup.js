import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from '../Dashboard'
//import AddList from '../list_components/AddList'
import PrivateRoute from '../PrivateRoute'
//import AddTask from '../list_components/AddTask'

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
                  {/* <PrivateRoute path='/add-list'component={AddList} />
                  <PrivateRoute path='/add-task'component={AddTask} /> */}
                  <Route exact path='/' component={Signup} />
                </Switch>
            </div>
        </div>
    );
}

export default LoginSignup;