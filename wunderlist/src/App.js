import React from 'react';
import { Route, Link } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from './components/Dashboard'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="login-signup">
        <h1>Welcome!</h1>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>

       <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    </div>
  );
}

export default App;
