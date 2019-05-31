import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import mainImg from '../images/rr-library-vf.jpg';
import githubLogo from '../images/logos/github-logo-sm.png';
import twitterLogo from '../images/logos/twitter-logo-sm.png';
import linkedinLogo from '../images/logos/linkedin-logo-sm.png';

const Home = () => {
  return (
    <div className="home">
      <Row className="intro">
        <Col className="intro-info">
          <h1>Hello <Link to="/about" className="wave"><span role="img" aria-labelledby="wave">👋🏼</span></Link> I am vicTORIa.</h1>

          <Row className="social-links">
            <a href="https://github.com/torianne02" target="_blank">
              <img className="social-icon" src={githubLogo} alt="Github logo as profile link" />
            </a>
            <a href="https://dev.to/torianne02" target="_blank">
              <img className="social-icon" src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Victoria Fluharty's DEV Profile" height="32px" width="32px" />
            </a>
            <a href="https://twitter.com/_torrborr" target="_blank">
              <img className="social-icon" src={twitterLogo} alt="Twitter logo as profile link" />
            </a>
            <a href="https://www.linkedin.com/in/victoria-fluharty-741129b4/" target="_blank">
              <img className="social-icon" src={linkedinLogo} alt="LinkedIn logo as profile link" />
            </a>
          </Row>

          <h5>A creative, passionate, and driven software engineer with experience
            in Ruby and Javascript frameworks that strives to write clean,
            efficient code.</h5>
        </Col>
        <Col className="main-img">
            <img className="main-img" src={mainImg} alt="Victoria" />
        </Col>
      </Row>
    </div>
  )
}

export default Home
