import React, { Component } from "react";
import { Alert } from "react-bootstrap";

export default class Test extends Component {
  render() {
    return (
      <Alert className={this.props.nightmode ? "light" : "dark"}>
        {this.props.nightmode === true ? (
          <p className="dark-text">Nightmode is on</p>
        ) : (
          <p className="light-text">Nightmode is off</p>
        )}
      </Alert>
    );
  }
}
