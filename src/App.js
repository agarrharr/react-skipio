import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const {children, subtitle, title} = this.props;
    return (
      <div className='App'>
        <div className='App__Header'>
          <div className='App__HeaderTitle'>
            {title}
          </div>
          <div className='App__HeaderSubtitle'>
            {subtitle}
          </div>
        </div>
        {children}
      </div>
    );
  }
}

export default App;
