import React from 'react';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

// need to add onChange, onSubmit, and value attr to each form group

const ContactForm = () => {
  return (
    <Container className="contact-form">
      <Form>
        <Col>
          <FormGroup>
            <Label for="name" hidden>Name</Label>
            <Input type="text"
              name="name"
              placeholder="Full Name" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="email" hidden>Email</Label>
            <Input type="email"
              name="email"
              placeholder="Email" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="message" hidden>Message</Label>
            <Input type="text"
              name="message"
              placeholder="Message" />
          </FormGroup>
        </Col>
        <Button>Submit</Button>
      </Form>
    </Container>
  )
}

export default ContactForm
