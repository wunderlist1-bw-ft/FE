import React from 'react';
// import { Route } from "react-router-dom";
// import LoginSignup from "./components/onboarding/LoginSignup";

import Dashboard from './components/Dashboard'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Route path="/">
        <LoginSignup />
      </Route> */}
      <Dashboard />
    </div>
  );
}

export default App;