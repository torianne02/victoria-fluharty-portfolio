import React from 'react';
import { Media } from 'reactstrap';
import mainImg from '../images/rr-library-vf.jpg';

const About = () => {
  return (
    <div className="about-me">
      <div className="main-img">
        <Media top right className="main-img">
          <Media object src={mainImg} alt="Photo of me, Victoria." />
        </Media>
      </div>
      <div className="about-info">
        <h1>Hello 👋🏼 I am Victoria.</h1>
        <h5>A creative, passionate, and driven software engineer with experience in Ruby and Javascript frameworks that strives to write clean, efficient code.</h5>
      </div>
    </div>
  )
}

export default About
