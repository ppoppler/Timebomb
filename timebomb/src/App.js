import React, { Component } from 'react';
import logo from './logo.svg';
//import HomePage from './HomePage';
import AddC from './Components/AddCounter';
import React, { Component } from "react";
import logo from "./logo.svg";
import HomePage from "./components/HomePage";
import Countdown from "./Countdown";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HomePage/>
          <Countdown title="BeachHacks" endDate={new Date('December 17, 2019 03:24:00')}/>
      </div>
    );
  }
}

export default App;
