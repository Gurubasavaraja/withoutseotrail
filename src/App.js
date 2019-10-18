import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from '../src/MainComponent.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainComponent />
      </div>
    );
  }
}

export default App;
