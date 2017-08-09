import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const {children, title} = this.props;
    return (
      <div>
        <div className="App__Header">
          {title}
        </div>
        {children}
      </div>
    );
  }
}

export default App;
