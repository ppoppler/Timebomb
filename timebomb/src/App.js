import React, { Component } from 'react';
import logo from './logo.svg';
//import HomePage from './HomePage';
import AddC from './components/AddCounter';
import HomePage from "./components/HomePage";
import Countdown from "./Countdown";
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
