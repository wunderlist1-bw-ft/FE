import React from "react";
import { Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import Signup from "./Signup";
import Login from "./Login";

const LoginSignup = () => {
    return (
        <div className="login-signup-container">
            <div className="login-signup">
                <h1><FontAwesomeIcon icon={faTasks} /> Wunderlist</h1>
                <div className="login-signup-links">
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                </div>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
            </div>
        </div>
    );
}

export default LoginSignup;