import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import clock from "./img/clock_icon.png";

export default class HomePage extends Component {
  render() {
    return (
      <Navbar transparent fixed="top" expand="lg">
        <Navbar.Collapse className="justify-content-end">
          <a href="login">
            <img className="small-icon" src={clock} />
          </a>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
