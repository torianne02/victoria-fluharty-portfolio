import React, { Component } from 'react';
import ContactForm from '../components/contact/ContactForm';
import { Redirect } from 'react-router-dom';
import * as emailjs from 'emailjs-com';

class ContactContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();

    if (this.validate()) {
      this.sendEmail();
      this.setState({
        name: '',
        email: '',
        message: '',
        submitted: true,
      })
    }
  }

  validate = () => {
    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (!this.state.name || !this.state.email) {
      return alert('Oops! Please make sure to provide your name and email.')
    } else if (!this.state.message) {
      return alert('Please make sure to include a message so that I can respond to your inquiry to the best of my abilities.')
    } else if (!pattern.test(this.state.email)){
      return alert('Please enter valid email.')
    } else {
      return true
    }
  }

  sendEmail = () => {
    let templateParams = {
      from_name: this.state.name,
      reply_to: this.state.email,
      to_email: 'victoria.fluharty@gmail.com',
      message: this.state.message
    }

    let service_id = "default_service";
    let template_id = "portfolio_site";
    let user_id = `${process.env.REACT_APP_USER_ID}`

    emailjs.send(service_id, template_id, templateParams, user_id)
  }

  renderThankYou = () => {
    return (
      <Redirect to='/thank-you' />
    )
  }

  render() {
    return (
      <div className="contact">
        <h1>Contact Me</h1>
        <ContactForm
          nameValue={ this.state.name }
          emailValue={ this.state.email }
          messageValue={ this.state.message }
          handleOnChange={ this.handleOnChange }
          handleOnSubmit={ this.handleOnSubmit }
        />
        { this.state.submitted && this.renderThankYou() }
      </div>
    )
  }
}

export default ContactContainer
