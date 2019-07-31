import React, { Component } from 'react';
import './App.css';
import TripsContainer from './components/TripsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello Yann!</h1>
        </header>
        <TripsContainer />
      </div>
    );
  }
}

export default App;