import React, { Component } from "react";
import { Container } from "react-bootstrap";

/**
 * Returns a single countdown object. The time will be initially set but using state, the countdown time will change
 */
export default class Countdown extends Component {
  state = {
    seconds: "00",
    minutes: "",
    hours: "",
    days: "",
    timeLeft: ""
  };



  componentDidMount(){
      setInterval(this.getTimeLeft.bind(this), 1000);
  }

  /**
   * const form = {
   *  title: "BeachHacks",
   *  endDate: "4934932049324"
   * }
   * <Countdown endDate={form.endDate} title={form.title}/>
   *
   */

  getTimeLeft() {
    var date1 = new Date();
    var date2 = new Date('December 17, 2019 03:24:00')
    

    var days = inDays(date1, date2);
    var hours = inHours(date1, date2);
    var minutes = inMinutes(date1, date2);
    var seconds = inSeconds(date1, date2);

    if (days > 1) {
      this.setState({
        timeLeft: `${days} days | ${hours} hours | ${minutes} minutes | ${seconds} seconds`
      });
    } else if (hours > 1) {
      this.setState({
        timeLeft: `${hours} hours | ${minutes} minutes | ${seconds} seconds`
      });
    } else if (minutes > 1) {
      this.setState({ timeLeft: `${minutes} minutes | ${seconds} seconds` });
    } else {
      this.setState({ timeLeft: `${seconds} seconds` });
    }

    // if (d1 < d2) {
    //     //countdown over
    // }
  }

  render() {
    return (
      <div>
        <Container>
          <h2>{this.props.title}</h2>
            {console.log(this.state.timeLeft)}
            <h3>{this.state.timeLeft}</h3>
        </Container>
      </div>
    );
  }
}



function inDays(date1, date2) {
    var t1 = date1.getTime();
    var t2 = date2.getTime();

    return parseInt((t2 - t1) / (24 * 3600 * 1000));
  }
  function inHours(date1, date2) {
    var t1 = date1.getTime();
    var t2 = date2.getTime();

    return parseInt((t2 - t1) / (3600 * 1000));
  }
  function inMinutes(date1, date2) {
    var t1 = date1.getTime();
    var t2 = date2.getTime();

    return parseInt((t2 - t1) / (60 * 1000));
  }
 function inSeconds(date1, date2) {
    var t1 = date1.getTime();
    var t2 = date2.getTime();

    return parseInt((t2 - t1) / 1000);
  }
