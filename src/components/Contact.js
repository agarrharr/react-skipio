import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    const {avatarUrl, name, onClick} = this.props;
    return (
      <div className='Contact' onClick={onClick}>
        <img className='Contact__Avatar' src={avatarUrl} alt={name} />
        <div>{name}</div>
      </div>
    );
  }
}

export default Contact;
