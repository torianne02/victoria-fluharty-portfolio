import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/about" component={About} />
          // need to add contact container and route
          // need to add project container and route
        </Switch>
      </div>
    </Router>
  );
}

export default App;
