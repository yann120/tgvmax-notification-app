import React, { Component } from 'react';
import './App.css';
import TripsContainer from './components/TripsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TripsContainer />
      </div>
    );
  }
}

export default App;