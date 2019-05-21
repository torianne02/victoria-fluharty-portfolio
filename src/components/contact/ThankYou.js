import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class ThankYou extends Component {
  render() {
    return (
      <div className="thank-you">
        <Card>
          <CardBody>
            <CardTitle>
              Thank You
            </CardTitle>
            <CardText>
              I will get back to you with a response as soon as I possibly can.
            </CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default ThankYou
