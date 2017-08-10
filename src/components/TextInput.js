import React, { Component } from 'react';
import './TextInput.css';

class TextInput extends Component {
  state = {
    message: 'hi',
  };

  handleInputChange = e => {
    this.setState({
      message: e.target.value,
    });
  };

  render() {
    const {message} = this.state;
    const {onSubmit} = this.props;
    return (
      <div>
        <input className='TextInput__Input' type='text' value={message} onChange={this.handleInputChange} />
        <button className='TextInput__Buton' onClick={() => {onSubmit(this.state.message)}}>Send</button>
      </div>
    );
  }
}

export default TextInput;
