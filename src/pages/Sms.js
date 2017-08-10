import React, { Component } from 'react';
import App from '../App.js';
import TextInput from '../components/TextInput';
import {fetchUserById, postText} from '../fetch';

class Sms extends Component {
  state = {
    name: '',
    phoneNumber: '',
  };

  componentDidMount() {
    fetchUserById(this.props.match.params.id)
      .then(response => {
        console.log(response);
        if (response.data) {
          this.setState({
            name: response.data.full_name,
            phoneNumber: response.data.phone_mobile_national,
          });
        }
      })
  }

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
    const {name, phoneNumber} = this.state;
    return (
      <App title={name} subtitle={phoneNumber}>
        <TextInput onSubmit={m => {this.handleClick(m)}} />
      </App>
    );
  }
}

export default Sms;
