import React from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

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
            // add CardImg for image of project
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
            // add CardImg for image of project
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
            // add CardImg for image of project
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
            // add CardImg for image of project
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
            // add CardImg for image of project
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
