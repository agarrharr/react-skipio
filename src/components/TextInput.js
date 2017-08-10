import React, { Component } from 'react';

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
        <input type='text' value={message} onChange={this.handleInputChange} />
        <button onClick={() => {onSubmit(this.state.message)}}>Send</button>
      </div>
    );
  }
}

export default TextInput;
