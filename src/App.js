import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Contacts</h2>
        </div>
        <Contacts />
      </div>
    );
  }
}

export default App;
