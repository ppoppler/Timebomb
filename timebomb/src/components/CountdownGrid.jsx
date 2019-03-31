import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Countdown from "./Countdown";

/**
 * Contains a grid of all the countdown objects
 */
export default class CountdownGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Countdown
          title="BeachHacks"
          endDate={new Date("April 20, 2019 02:30:00")}
          nightmode={this.props.nightmode}
        />
        {this.props.countdowns.map(element => (
          <div>
            {console.log(element)}
            <Countdown
              title={element.title}
              endDate={element.endDate}
              nightmode={this.props.nightmode}
            />
          </div>
        ))}
      </div>
    );
  }
}
