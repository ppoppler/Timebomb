import React, { Component } from 'react';
import logo from './logo.svg';
//import HomePage from './HomePage';
import AddC from './Components/AddCounter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AddC/>
        </header>
      </div>
    );
  }
}

export default App;
