import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
