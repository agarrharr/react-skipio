import React, { Component } from 'react';
import axios from 'axios';
import App from '../App.js';
import credentials from '../credentials.json';

class Sms extends Component {
  handleClick = () => {
    axios.post(`https://${credentials.environment}.skipio.com/api/v2/messages?token=${credentials.token}`, {
        recipients: [`contact-${this.props.match.params.id}`],
        message: { body: "hello"},
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
        <button onClick={this.handleClick}>Say hello</button>
      </App>
    );
  }
}

export default Sms;
