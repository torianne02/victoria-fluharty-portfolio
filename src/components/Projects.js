import React from 'react';
import { Row, Col, Card, CardImg, CardTitle, CardSubtitle } from 'reactstrap';
import crawfordWedding from '../images/projects/crawford-wedding.png';
import dayBooks from '../images/projects/day-books.png';
import pintTrackr1 from '../images/projects/pint-trackr-1.0.png';
import pintTrackr2 from '../images/projects/pint-trackr-2.0.png';
import weatherCaster from '../images/projects/weather-caster.png';
import javascriptLogo from '../images/languages/javascript-logo-sm.png';
import railsLogo from '../images/languages/rails-logo-sm.png';
import rubyLogo from '../images/languages/ruby-logo-sm.png';
import reactLogo from '../images/languages/react-logo-sm.png';
import reduxLogo from '../images/languages/redux-logo-sm.png';
import githubLogo from '../images/logos/github-logo-sm.png';

const Projects = () => {
  return (
    <div className="projects">
      <Row>
        <Col sm="4" py="2">
          <Card className="project">
            // add CardImg for image of project
            <Card body>
              <CardTitle>Personal Portfolio</CardTitle>
              <CardSubtitle>Portfolio web-applicaiton built to display projects
                and other vital information.</CardSubtitle>
              <Row className="stack">
                <img className="proj-lang-logo" src={reactLogo} alt="React Logo" />
                <img className="proj-lang-logo" src={javascriptLogo} alt="JavaScript Logo" />
              </Row>
              <Row className="links">
                <a href="https://github.com/torianne02/victoria-fluharty-portfolio">
                  <img src={githubLogo} alt="Github logo as repository link" />
                </a>
              </Row>
            </Card>
          </Card>
        </Col>
        <Col sm="4" py="2">
          <Card className="project">
            <CardImg top width="50%" src={crawfordWedding} alt="Crawford Wedding Screenshot" />
            <Card body>
              <CardTitle>Crawford Wedding</CardTitle>
              <CardSubtitle>A multi-functional wedding web-application.</CardSubtitle>
              <Row className="stack">
                <img className="proj-lang-logo" src={reactLogo} alt="React Logo" />
                <img className="proj-lang-logo" src={rubyLogo} alt="Ruby Logo" />
                <img className="proj-lang-logo" src={railsLogo} alt="Rails Logo" />
                <img className="proj-lang-logo" src={reduxLogo} alt="Redux Logo" />
                <img className="proj-lang-logo" src={javascriptLogo} alt="Javascript Logo" />
              </Row>
              <Row className="links">
                <a href="https://github.com/torianne02/crawford-wedding-frontend">
                  <img src={githubLogo} alt="Github logo as repository link" />
                </a>
              </Row>
            </Card>
          </Card>
        </Col>
        <Col sm="4" py="2">
          <Card className="project">
            <CardImg top width="50%" src={pintTrackr2} alt="PintTrackr 2.0 Screenshot" />
            <Card body>
              <CardTitle>PintTrackr 2.0</CardTitle>
              <CardSubtitle>A web-application used to track beers that one has
                tried over the years.</CardSubtitle>
              <Row className="stack">
                <img className="proj-lang-logo" src={rubyLogo} alt="Ruby Logo" />
                <img className="proj-lang-logo" src={railsLogo} alt="Rails Logo" />
                <img className="proj-lang-logo" src={javascriptLogo} alt="JavaScript Logo" />
              </Row>
              <Row className="links">
                <a href="https://github.com/torianne02/pint-trackr-rails-js">
                  <img src={githubLogo} alt="Github logo as repository link" />
                </a>
              </Row>
            </Card>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="4" py="2">
          <Card className="project">
            <CardImg top width="50%" src={weatherCaster} alt="Weather Caster Screenshot" />
            <Card body>
              <CardTitle>Weather Caster</CardTitle>
              <CardSubtitle>A simple current forecast web-application that utilizes
                OpenWeatherMap's API.</CardSubtitle>
              <Row className="stack">
                <img className="proj-lang-logo" src={reactLogo} alt="React Logo" />
                <img className="proj-lang-logo" src={javascriptLogo} alt="JavaScript Logo"/>
              </Row>
              <Row className="links">
                <a href="https://github.com/torianne02/weather-caster">
                  <img src={githubLogo} alt="Github logo as repository link" />
                </a>
              </Row>
            </Card>
          </Card>
        </Col>
        <Col sm="4" py="2">
          <Card className="project">
            <CardImg top width="50%" src={pintTrackr1} alt="PintTrackr 1.0 Screenshot" />
            <Card body>
              <CardTitle>PintTrackr 1.0</CardTitle>
              <CardSubtitle>A web-application used to track beers that one has
                tried over the years.</CardSubtitle>
              <Row className="stack">
                <img className="proj-lang-logo" src={rubyLogo} alt="Ruby Logo" />
                <img className="proj-lang-logo" src={railsLogo} alt="Rails Logo" />
              </Row>
              <Row className="links">
                <a href="https://github.com/torianne02/pint-trackr-rails">
                  <img src={githubLogo} alt="Github logo as repository link" />
                </a>
              </Row>
            </Card>
          </Card>
        </Col>
        <Col sm="4" py="2">
          <Card className="project">
            <CardImg top width="50%" src={dayBooks} alt="DayBooks Screenshot" />
            <Card body>
              <CardTitle>DayBooks</CardTitle>
              <CardSubtitle>A Ruby CLI gem that displays a list of all books written
                by famous author, Sylvia Day.</CardSubtitle>
              <Row className="stack">
                <img className="proj-lang-logo" src={rubyLogo} alt="Ruby Logo" />
              </Row>
              <Row className="links">
                <a href="https://github.com/torianne02/CLI-Project-Day-Library">
                  <img src={githubLogo} alt="Github logo as repository link" />
                </a>
              </Row>
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Projects
