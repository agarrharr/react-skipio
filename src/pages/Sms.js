import React, { Component } from 'react';
import App from '../App.js';

class Sms extends Component {
  render() {
    const {match} = this.props;
    return (
      <App title='Send SMS'>
        {match.params.id}
      </App>
    );
  }
}

export default Sms;
