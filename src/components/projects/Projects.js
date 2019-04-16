import React from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import crawfordWedding from '../images/projects/crawford-wedding.png';
import dayBooks from '../images/projects/day-books.png';
import pintTrackr1 from '../images/projects/pint-trackr-1.0.png';
import pintTrackr2 from '../images/projects/pint-trackr-2.0.png';
import weatherCaster from '../images/projects/weather-caster.png';

const Projects = () => {
  return (
    <div className="projects">
      <Row>
        <Col>
          <Card className="project">
            // add CardImg for image of project
            <CardBody>
              <CardTitle>Personal Portfolio</CardTitle>
              <CardSubtitle>Portfolio web-applicaiton built to display projects
                and other vital information.</CardSubtitle>
              <CardText>Stack:</CardText>
              // insert either languages by text or images - React.js, Reactstrap, Bootstrap, Javascript, CSS
              // insert github link via github button as sm-logo - https://github.com/torianne02/victoria-fluharty-portfolio
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="project">
            <CardImg top width="100%" src={crawfordWedding} alt="Crawford Wedding Screenshot" />
            <CardBody>
              <CardTitle>Crawford Wedding</CardTitle>
              <CardSubtitle>A multi-functional wedding web-application.</CardSubtitle>
              <CardText>Stack:</CardText>
              // insert either languages by text or images - React.js, Ruby on Rails, JavaScript, SQLite, HTML, CSS, Reactstrap, Bootstrap
              // insert github link via github button as sm-logo - https://github.com/torianne02/crawford-wedding-frontend
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="project">
            <CardImg top width="100%" src={pintTrackr2} alt="PintTrackr 2.0 Screenshot" />
            <CardBody>
              <CardTitle>PintTrackr 2.0</CardTitle>
              <CardSubtitle>A web-application used to track beers that one has
                tried over the years.</CardSubtitle>
              <CardText>Stack:</CardText>
              // insert either languages by text or images - Ruby on Rails, JavaScript, SQLite, HTML, CSS, AJAX, jQuery, JSON
              // insert github link via github button as sm-logo - https://github.com/torianne02/pint-trackr-rails-js
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="project">
            <CardImg top width="100%" src={weatherCaster} alt="Weather Caster Screenshot" />
            <CardBody>
              <CardTitle>Weather Caster</CardTitle>
              <CardSubtitle>A simple current forecast web-application.</CardSubtitle>
              <CardText>Stack:</CardText>
              // insert either languages by text or images - React.js, Reactstrap, Bootstrap, Javascript, CSS
              // insert github link via github button as sm-logo - https://github.com/torianne02/weather-caster
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="project">
            <CardImg top width="100%" src={pintTrackr1} alt="PintTrackr 1.0 Screenshot" />
            <CardBody>
              <CardTitle>PintTrackr 1.0</CardTitle>
              <CardSubtitle>A web-application used to track beers that one has
                tried over the years.</CardSubtitle>
              <CardText>Stack:</CardText>
              // insert either languages by text or images - Ruby on Rails, ActiveRecord
              // insert github link via github button as sm-logo - https://github.com/torianne02/pint-trackr-rails
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="project">
            <CardImg top width="100%" src={dayBooks} alt="DayBooks Screenshot" />
            <CardBody>
              <CardTitle>DayBooks</CardTitle>
              <CardSubtitle>A Ruby CLI gem that allows a user to comb through a
                list of all books written and published by famous author, Sylvia
                Day.</CardSubtitle>
              <CardText>Stack:</CardText>
              // insert either languages by text or images - Ruby
              // insert github link via github button as sm-logo - https://github.com/torianne02/CLI-Project-Day-Library
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Projects
