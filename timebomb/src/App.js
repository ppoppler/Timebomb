import React, { Component } from 'react';
import AddC from './Components/AddCounter';
import logo from "./logo.svg";
import HomePage from "./Components/HomePage";
import Countdown from "./Components/Countdown";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HomePage/>
      </div>
    );
  }
}

export default App;
