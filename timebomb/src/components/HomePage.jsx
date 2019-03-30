import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import Test from './Test';
import clock from "../img/clock_icon.png";
import setting from "../img/settings_icon.png";
import moon from "../img/moon_icon.png";
import clock_d from "../img/clock_icon_d.png"
import setting_d from "../img/settings_icon_d.png"
import moon_d from "../img/moon_icon_d.png";

export default class HomePage extends Component {
  state = {
    nightmode: true
  };

  toggleClass() {
    const currentState = this.state.nightmode;
    this.setState({ nightmode: !currentState });
    console.log(this.state.nightmode);
  }

  render() {
    return (
      <div className={this.state.nightmode ? "dark home" : "light home"} >
        <Navbar transparent fixed="top" expand="lg">
          <Navbar.Collapse className="justify-content-end">
            <a href="add_clock">
              <img className="small-icon" src={this.state.nightmode ? clock : clock_d} alt="clock" />
            </a>
            <img
              className="small-icon"
              src={this.state.nightmode ? moon : moon_d}
              onClick={this.toggleClass.bind(this)}
              alt="moon"
            />
            <a href="settings">
              <img className="small-icon" src={this.state.nightmode ? setting : setting_d} alt="setting" />
            </a>
          </Navbar.Collapse>
        </Navbar>
        <Test nightmode={this.state.nightmode}/>
      </div>
    );
  }
}
