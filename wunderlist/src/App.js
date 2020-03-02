import React from 'react';
import { Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="login-signup">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
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

export default App;
