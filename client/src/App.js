import React, { Component } from 'react';
import './App.css';
import TripsContainer from './components/TripsContainer';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <TripsContainer />
      </div>
    );
  }
}

export default App;