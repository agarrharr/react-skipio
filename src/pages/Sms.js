import React, { Component } from 'react';

class Sms extends Component {
  render() {
    const {match} = this.props;
    return (
      <div className='Sms'>
        {match.params.id}
      </div>
    );
  }
}

export default Sms;
