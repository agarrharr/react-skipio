import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const {avatarUrl, name} = this.props;
    return (
      <div className="Contact">
        <img src={avatarUrl} alt={name} />
        <p>{name}</p>
      </div>
    );
  }
}

export default Contact;
