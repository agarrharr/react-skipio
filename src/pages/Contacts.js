import React, { Component } from 'react';
import App from '../App.js';
import ContactList from '../components/ContactList.js';

class Contacts extends Component {
  render() {
    const {match} = this.props;
    return (
      <App title='Contacts'>
        <ContactList />
      </App>
    );
  }
}

export default Contacts;
