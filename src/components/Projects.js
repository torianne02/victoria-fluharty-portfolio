import React from 'react';
import { Row, Col, Card, CardImg, CardTitle, CardSubtitle } from 'reactstrap';
import vfPortfolio from '../images/projects/vf-portfolio.png';
import crawfordWedding from '../images/projects/crawford-wedding.png';
import dayBooks from '../images/projects/day-books.png';
import pintTrackr2 from '../images/projects/pint-trackr-2.0.png';
import weatherCaster from '../images/projects/weather-caster.png';
import pizzaAnalytics from '../images/projects/pizza-analytics.png';

const Projects = () => {
  return (
    <div className="projects">
      <Row className="projects-row-1">
        <Col sm="4" py="2">
          <Card className="project">
            <CardImg top width="50%" src={vfPortfolio} alt="Victoria Fluharty's Portfolio Screenshot" />
            <Card body>
              <CardTitle><a href="https://github.com/torianne02/victoria-fluharty-portfolio">Personal Portfolio</a></CardTitle>
              <CardSubtitle>Portfolio web-applicaiton built to display projects
                and other vital information.</CardSubtitle>
              <Row className="stack">
                <p><b>Stack:</b> JavaScript, React.js</p>
              </Row>
            </Card>
          </Card>
        </Col>
        <Col sm="4" py="2">
          <Card className="project">
            <CardImg top width="50%" src={crawfordWedding} alt="Crawford Wedding Screenshot" />
            <Card body>
              <CardTitle><a href="https://github.com/torianne02/crawford-wedding-frontend">Crawford Wedding</a></CardTitle>
              <CardSubtitle>A multi-functional wedding web-application.</CardSubtitle>
              <Row className="stack">
                <p><b>Stack:</b> JavaScript, React.js, Redux, Ruby on Rails, SQLite</p>
              </Row>
            </Card>
          </Card>
        </Col>
        <Col sm="4" py="2">
          <Card className="project">
            <CardImg top width="50%" src={pintTrackr2} alt="PintTrackr 2.0 Screenshot" />
            <Card body>
              <CardTitle><a href="https://github.com/torianne02/pint-trackr-rails-js">PintTrackr 2.0</a></CardTitle>
              <CardSubtitle>A web-application used to track beers that one has
                tried over the years.</CardSubtitle>
              <Row className="stack">
                <p><b>Stack:</b> JavaScript, PostgreSQL, Ruby on Rails</p>
              </Row>
            </Card>
          </Card>
        </Col>
      </Row>
      <Row className="projects-row-2">
        <Col sm="4" py="2">
          <Card className="project">
            <CardImg top width="50%" src={weatherCaster} alt="Weather Caster Screenshot" />
            <Card body>
              <CardTitle><a href="https://github.com/torianne02/weather-caster">Weather Caster</a></CardTitle>
              <CardSubtitle>A simple current forecast web-application that utilizes
                OpenWeatherMap's API.</CardSubtitle>
              <Row className="stack">
                <p><b>Stack:</b> JavaScript, React.js</p>
              </Row>
            </Card>
          </Card>
        </Col>
        <Col sm="4" py="2">
          <Card className="project">
            <CardImg top width="50%" src={pizzaAnalytics} alt="Pizza Analytics Screenshot" />
            <Card body>
              <CardTitle><a href="https://github.com/torianne02/pizza-analytics-frontend">Pizza Analytics</a></CardTitle>
              <CardSubtitle>A web-application used to display pizzas and consumers
                by making requests to a RESTful Ruby API.</CardSubtitle>
              <Row className="stack">
                <p><b>Stack:</b> Grape, JavaScript, PostgreSQL, React.js, Ruby, Sequel</p>
              </Row>
            </Card>
          </Card>
        </Col>
        <Col sm="4" py="2">
          <Card className="project">
            <CardImg top width="50%" src={dayBooks} alt="DayBooks Screenshot" />
            <Card body>
              <CardTitle><a href="https://github.com/torianne02/CLI-Project-Day-Library">DayBooks</a></CardTitle>
              <CardSubtitle>A Ruby CLI gem that displays a list of all books written
                by famous author, Sylvia Day.</CardSubtitle>
              <Row className="stack">
                <p><b>Stack:</b> Ruby</p>
              </Row>
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Projects
