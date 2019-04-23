import React from 'react';
import { Row, Col, Card, CardImg, CardText, CardTitle, CardSubtitle, Container } from 'reactstrap';
import crawfordWedding from '../images/projects/crawford-wedding.png';
import dayBooks from '../images/projects/day-books.png';
import pintTrackr1 from '../images/projects/pint-trackr-1.0.png';
import pintTrackr2 from '../images/projects/pint-trackr-2.0.png';
import weatherCaster from '../images/projects/weather-caster.png';

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
              <CardText>Stack:</CardText>
              // insert either languages by text or images - React.js, Reactstrap, Bootstrap, Javascript, CSS
              // insert github link via github button as sm-logo - https://github.com/torianne02/victoria-fluharty-portfolio
            </Card>
          </Card>
        </Col>
        <Col sm="4" py="2">
          <Card className="project">
            <CardImg top width="50%" src={crawfordWedding} alt="Crawford Wedding Screenshot" />
            <Card body>
              <CardTitle>Crawford Wedding</CardTitle>
              <CardSubtitle>A multi-functional wedding web-application.</CardSubtitle>
              <CardText>Stack:</CardText>
              // insert either languages by text or images - React.js, Ruby on Rails, JavaScript, SQLite, HTML, CSS, Reactstrap, Bootstrap
              // insert github link via github button as sm-logo - https://github.com/torianne02/crawford-wedding-frontend
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
              <CardText>Stack:</CardText>
              // insert either languages by text or images - Ruby on Rails, JavaScript, SQLite, HTML, CSS, AJAX, jQuery, JSON
              // insert github link via github button as sm-logo - https://github.com/torianne02/pint-trackr-rails-js
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
              <CardSubtitle>A simple current forecast web-application.</CardSubtitle>
              <CardText>Stack:</CardText>
              // insert either languages by text or images - React.js, Reactstrap, Bootstrap, Javascript, CSS
              // insert github link via github button as sm-logo - https://github.com/torianne02/weather-caster
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
              <CardText>Stack:</CardText>
              // insert either languages by text or images - Ruby on Rails, ActiveRecord
              // insert github link via github button as sm-logo - https://github.com/torianne02/pint-trackr-rails
            </Card>
          </Card>
        </Col>
        <Col sm="4" py="2">
          <Card className="project">
            <CardImg top width="50%" src={dayBooks} alt="DayBooks Screenshot" />
            <Card body>
              <CardTitle>DayBooks</CardTitle>
              <CardSubtitle>A Ruby CLI gem that allows a user to comb through a
                list of all books written and published by famous author, Sylvia
                Day.</CardSubtitle>
              <CardText>Stack:</CardText>
              // insert either languages by text or images - Ruby
              // insert github link via github button as sm-logo - https://github.com/torianne02/CLI-Project-Day-Library
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Projects
