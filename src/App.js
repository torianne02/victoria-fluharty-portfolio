import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/contact/ContactForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact-me" component={ContactForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
