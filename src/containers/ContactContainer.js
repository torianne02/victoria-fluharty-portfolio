import React, { Component } from 'react';
import ContactForm from '../components/contact/ContactForm';
import { Redirect } from 'react-router-dom';

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
      this.renderThankYou()
    }
  }

  validate = () => {
    if (!this.state.name || !this.state.email) {
      return alert('Oops! Please make sure to provide your name and email.')
    } else if (!this.state.message) {
      return alert('Please make sure to include a message so that I can respond to your inquiry to the best of my abilities.')
    } else {
      return true
    }
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
      </div>
    )
  }
}

export default ContactContainer
