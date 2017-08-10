import React, { Component } from 'react';
import App from '../App.js';
import TextInput from '../components/TextInput';
import {postText} from '../fetch';

class Sms extends Component {
  handleClick = message => {
    postText(this.props.match.params.id, message)
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
