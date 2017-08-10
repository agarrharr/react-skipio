import React, { Component } from 'react';
import axios from 'axios';
import App from '../App.js';
import credentials from '../credentials.json';
import TextInput from '../components/TextInput';

class Sms extends Component {
  handleClick = message => {
    axios.post(`https://${credentials.environment}.skipio.com/api/v2/messages?token=${credentials.token}`, {
        recipients: [`contact-${this.props.match.params.id}`],
        message: { body: message},
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (e) {
        console.warn(`Error occured sending sms: ${e}`);
      });
  };

  render() {
    const {match} = this.props;
    return (
      <App title='Send SMS'>
        {match.params.id}
        <TextInput onSubmit={m => {this.handleClick(m)}} />
      </App>
    );
  }
}

export default Sms;
