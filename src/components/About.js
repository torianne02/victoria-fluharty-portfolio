import React from 'react';
import { Row, Col } from 'reactstrap';
import mainImg from '../images/rr-library-vf.jpg';
import javascriptLogo from '../images/languages/javascript-logo.png';
import railsLogo from '../images/languages/rails-logo.png';
import rubyLogo from '../images/languages/ruby-logo.png';
import reactLogo from '../images/languages/react-logo.png';
import reduxLogo from '../images/languages/redux-logo.png';
import sqliteLogo from '../images/languages/sqlite-logo.png';
import postgresLogo from '../images/languages/postgres-logo.png';
import githubLogo from '../images/logos/github-logo-sm.png';
import twitterLogo from '../images/logos/twitter-logo-sm.png';
import linkedinLogo from '../images/logos/linkedin-logo-sm.png';

const About = () => {
  return (
    <div className="about-me">
      <Row className="intro">
        <Col className="about-info">
          <h1>Hello 👋🏼 I am Victoria.</h1>

          <Row className="social-links">
            <a href="https://github.com/torianne02">
              <img className="social-icon" src={githubLogo} alt="Github logo as profile link" />
            </a>
            <a href="https://dev.to/torianne02">
              <img className="social-icon" src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Victoria Fluharty's DEV Profile" height="32px" width="32px" />
            </a>
            <a href="https://twitter.com/_torrborr">
              <img className="social-icon" src={twitterLogo} alt="Twitter logo as profile link" />
            </a>
            <a href="https://www.linkedin.com/in/victoria-fluharty-741129b4/">
              <img className="social-icon" src={linkedinLogo} alt="LinkedIn logo as profile link" />
            </a>
          </Row>

          <h5>A creative, passionate, and driven software engineer with experience
            in Ruby and Javascript frameworks that strives to write clean,
            efficient code.</h5>
        </Col>
        <Col className="main-img">
            <img className="main-img" src={mainImg} alt="Photo of me, Victoria." />
        </Col>
      </Row>
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
    </div>
  )
}

export default About
