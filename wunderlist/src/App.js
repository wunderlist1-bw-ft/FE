import React from 'react';
import { Route } from "react-router-dom";
import LoginSignup from "./components/onboarding/LoginSignup";


import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <LoginSignup />
      </Route>
    </div>
  );
}

export default App;