import React, { Component } from "react";
import logo from "./logo.svg";
import HomePage from "./components/HomePage";
import Countdown from "./Countdown";
import "./App.css";
import React, { Component } from 'react';
import logo from './logo.svg';
import HomePage from './HomePage';
import AddC from './Components/AddCounter';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        <Countdown />
        <header className="App-header">
          <AddC/>
        </header>
      </div>
    );
  }
}

export default App;
