import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          // need to add contact container and route
          // need to add project container and route
        </Switch>
      </div>
    </Router>
  );
}

export default App;
