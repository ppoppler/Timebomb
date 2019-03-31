import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";

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

  getTimeLeft() {

   var date1 = new Date().getTime();
   var date2 = new Date('April 20, 2019 14:00:00').getTime();

   var t = parseInt(date2 - date1);
   var seconds = Math.floor((t/1000) % 60);
   var minutes = Math.floor((t/1000/60) % 60);
   var hours = Math.floor((t/(1000*60*60)) % 24);
   var days = Math.floor((t/(1000*60*60*24))); 
    
    if (days > 1) {
      this.setState({
        timeLeft: `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
      });
    } else if (hours > 1) {
      this.setState({
        timeLeft: `${hours} hours, ${minutes} minutes, ${seconds} seconds`
      });
    } else if (minutes > 1) {
      this.setState({ timeLeft: `${minutes} minutes, ${seconds} seconds` });
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
        <Card bg={this.props.nightmode===true ? "dark" : "light"} text={this.props.nightmode===true ? "white" : "black"} style={{ width: '25rem' }}>
          <Card.Header><h1>{this.props.endDate.toDateString()}</h1></Card.Header>
          <Card.Body>
            <Card.Title><h2>{this.props.title}</h2> in </Card.Title>
            <Card.Text><h3>{this.state.timeLeft}</h3></Card.Text>
          </Card.Body>
        </Card>
        </Container>
      </div>
    );
  }
}
