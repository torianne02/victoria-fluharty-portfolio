import React from 'react';
import { Row, Col } from 'reactstrap';
import mainImg from '../images/rr-library-vf.jpg';

const About = () => {
  return (
    <div className="about-me">
      <Row>
        <Col>
          <div className="about-info">
            <h1>Hello 👋🏼 I am Victoria.</h1>
            <h5>A creative, passionate, and driven software engineer with experience in Ruby and Javascript frameworks that strives to write clean, efficient code.</h5>
          </div>
        </Col>
        <Col>
          <div className="main-img">
            <img className="main-img" src={mainImg} alt="Photo of me, Victoria." />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="stack">
          <h1>My Stack:</h1>
        </Col>
        <Col className="stack-info">
          
        </Col>
      </Row>
    </div>
  )
}

export default About
