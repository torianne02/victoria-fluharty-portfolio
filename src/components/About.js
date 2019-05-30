import React from 'react';
import { Row, Col } from 'reactstrap';
import javascriptLogo from '../images/languages/javascript-logo.png';
import railsLogo from '../images/languages/rails-logo.png';
import rubyLogo from '../images/languages/ruby-logo.png';
import reactLogo from '../images/languages/react-logo.png';
import reduxLogo from '../images/languages/redux-logo.png';
import sqliteLogo from '../images/languages/sqlite-logo.png';
import postgresLogo from '../images/languages/postgres-logo.png';

const About = () => {
  return (
    <div className="about-me">
      <Row className="stack">
        <Col sm="3" className="stack-title">
          <h1>My Stack</h1>
        </Col>
        <Col className="stack-info">
          <Row className="language-logos">
            <img className="lang-logo" src={rubyLogo} alt="Ruby Logo" />
            <img className="lang-logo" src={railsLogo} alt="Rails Logo" />
            <img className="lang-logo" src={javascriptLogo} alt="Javascript Logo" />
            <img className="lang-logo" src={reactLogo} alt="React Logo" />
            <img className="lang-logo" src={reduxLogo} alt="Redux Logo" />
            <img className="lang-logo" src={sqliteLogo} alt="SQLite Logo" />
            <img className="lang-logo" src={postgresLogo} alt="PostgreSQL Logo" />
          </Row>
        </Col>
      </Row>
      <Row className="interests">
        <Col sm="3" className="interests-title">
          <h1>My Interests</h1>
        </Col>
        <Col className="interests-info">
          <ul>
            <li><h5>I love animals - fur momma to two rambunctious cats.</h5></li>
            <li><h5>I absolutely love being outdoors, especially if it involves hiking
               and camping.</h5></li>
            <li><h5>I enjoy traveling internationally, but I have a soft spot for
               traveling my own country. My ultimate goal is visiting all 50 states -
               currently at 36.</h5></li>
            <li><h5>My passion truly lies within helping others, no matter how big or
            small of an impact I make. </h5></li>
          </ul>
        </Col>
      </Row>
    </div>
  )
}

export default About
