import React from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Projects = () => {
  return (
    <div className="projects">
      <Row>
        <Col>
          <Card className="project">
            <CardTitle>Crawford Wedding</CardTitle>
            <CardSubtitle>A multi-functional wedding web-application.</CardSubtitle>
            <CardText>Stack:</CardText>
            // insert either languages by text or images
            // insert github link via github button as logo
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Projects
