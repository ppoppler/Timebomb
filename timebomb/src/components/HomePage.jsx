import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import Test from "./Test";
import Countdown from "./Countdown";
import AddCounter from "./AddCounter";
import clock from "../img/clock_icon.png";
import setting from "../img/settings_icon.png";
import moon from "../img/moon_icon.png";
import clock_d from "../img/clock_icon_d.png";
import setting_d from "../img/settings_icon_d.png";
import moon_d from "../img/moon_icon_d.png";
import back from "../img/back_icon.png";
import back_d from "../img/back_icon_d.png";

export default class HomePage extends Component {
  state = {
    nightmode: true,
    page: "home",
    counters: []
  };

  receiveAddCounterCallback(data) {
    console.log(data.title);
    var array = this.state.counter.push(<Countdown title={data.title} endDate={data.endDate} />);
    this.setState({counters: array});
    console.log(this.state.counters);
  }

  toggleClass() {
    const currentState = this.state.nightmode;
    this.setState({ nightmode: !currentState });
    console.log(this.state.nightmode);
  }

  renderPage() {
    console.log(this.state.page);
    switch (this.state.page) {
      case "home":
        return (
          <div>
            <Countdown title="BeachHacks" endDate={new Date("April 20, 2019 02:30:00")}/>
            <Test nightmode={this.state.nightmode} />
          </div>
        )
      case "countdownGrid":
        return <AddCounter callback={this.receiveAddCounterCallback}/>;
      default:
        return <Test nightmode={this.state.nightmode} />;
    }
  }

  changePage(icon) {
    switch (icon) {
      case "clock":
        this.setState({ page: "countdownGrid" });
        break;
      case "settings":
        this.setState({ page: "settings" });
        break;
      case "back":
        this.setState({ page: "home" });
        break;
      default:
        this.setState({ page: "home" });
        break;
    }
  }

  render() {
    return (
      <div className={this.state.nightmode ? "dark home" : "light home"}>
        <Navbar transparent fixed="top" expand="lg">
          <Navbar.Collapse className="justify-content-end">
            {this.state.page === "home" ? (
              <a>
                <img
                  className="small-icon"
                  onClick={this.changePage.bind(this, "clock")}
                  src={this.state.nightmode ? clock : clock_d}
                  alt="clock"
                />
              </a>
            ) : (
              <a>
                <img
                  className="small-icon"
                  onClick={this.changePage.bind(this, "home")}
                  src={this.state.nightmode ? back : back_d}
                  alt="back"
                />
              </a>
            )}
            <img
              className="small-icon"
              src={this.state.nightmode ? moon : moon_d}
              onClick={this.toggleClass.bind(this)}
              alt="moon"
            />
            <a>
              <img
                className="small-icon"
                src={this.state.nightmode ? setting : setting_d}
                alt="setting"
              />
            </a>
          </Navbar.Collapse>
        </Navbar>
        {this.renderPage()}
      </div>
    );
  }
}
