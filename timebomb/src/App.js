import React, { Component } from "react";
import logo from "./logo.svg";
import HomePage from "./components/HomePage";
import Countdown from "./Countdown";
import "./App.css";
import React, { Component } from 'react';
import logo from './logo.svg';
import HomePage from './components/HomePage';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <HomePage/>
          <Countdown/>
      </div>
    );
  }
}

export default App;
