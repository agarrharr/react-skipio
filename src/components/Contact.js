import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    const {avatarUrl, name} = this.props;
    return (
      <div className='Contact'>
        <img className='Contact__Avatar' src={avatarUrl} alt={name} />
        <div className='Contact__Name'>{name}</div>
      </div>
    );
  }
}

export default Contact;
