import React from 'react';
import Nav from './navbar';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <Nav />
    </Router>
  );
}

export default App;
