import React from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Projects = () => {
  return (
    <div className="projects">
      <Row>
        <Col>
          <Card className="project">
            // add CardImg for image of project
            <CardTitle>Crawford Wedding</CardTitle>
            <CardSubtitle>A multi-functional wedding web-application.</CardSubtitle>
            <CardText>Stack:</CardText>
            // insert either languages by text or images - React.js, Ruby on Rails, JavaScript, SQLite, HTML, CSS, Reactstrap, Bootstrap
            // insert github link via github button as sm-logo - https://github.com/torianne02/crawford-wedding-frontend
          </Card>
        </Col>
        <Col>
          <Card className="project">
            // add CardImg for image of project
            <CardTitle>PintTrackr 2.0</CardTitle>
            <CardSubtitle>A web-application used to track beers that one has
              tried over the years.</CardSubtitle>
            <CardText>Stack:</CardText>
            // insert either languages by text or images - Ruby on Rails, JavaScript, SQLite, HTML, CSS, AJAX, jQuery, JSON
            // insert github link via github button as sm-logo - https://github.com/torianne02/pint-trackr-rails-js
          </Card>
        </Col>
        <Col>
          <Card className="project">
            // add CardImg for image of project
            <CardTitle>Weather Caster</CardTitle>
            <CardSubtitle>A simple current forecast web-application.</CardSubtitle>
            <CardText>Stack:</CardText>
            // insert either languages by text or images - React.js, Reactstrap, Bootstrap, Javascript, CSS
            // insert github link via github button as sm-logo - https://github.com/torianne02/weather-caster
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="project">
            // add CardImg for image of project
            <CardTitle>PintTrackr 1.0</CardTitle>
            <CardSubtitle>A web-application used to track beers that one has 
              tried over the years.</CardSubtitle>
            <CardText>Stack:</CardText>
            // insert either languages by text or images - Ruby on Rails, ActiveRecord
            // insert github link via github button as sm-logo - https://github.com/torianne02/pint-trackr-rails
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Projects
