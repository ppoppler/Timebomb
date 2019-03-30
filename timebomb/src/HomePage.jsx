import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import clock from "./img/clock_icon.png";
import setting from "./img/settings_icon.png";

export default class HomePage extends Component {
  render() {
    return (
      <Navbar transparent fixed="top" expand="lg">
        <Navbar.Collapse className="justify-content-end">
          <a href="add_clock">
            <img className="small-icon" src={clock} />
          </a>
          <a href="settings">
            <img className="small-icon" src={setting} />
          </a>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
