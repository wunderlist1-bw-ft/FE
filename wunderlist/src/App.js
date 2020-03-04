import React from 'react';
import { Route } from "react-router-dom";
import LoginSignup from "./components/onboarding/LoginSignup";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from './components/Dashboard'


import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/">
        <LoginSignup />
      </Route>
    </div>
    </Router>
  );
}

export default App;