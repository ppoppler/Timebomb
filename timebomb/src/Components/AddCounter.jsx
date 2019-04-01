import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";
/**
 * Prompts the user to add another counter
 */
export default class AddCounter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    endDate: new Date(),
    title: ""
  };

  handleChange(event) {
    this.setState({
      endDate: event
    });
    
  }

  handleText(event) {
    this.setState({ title: event.target.value });
  }

  add(event) {
    event.preventDefault();
    const data = { endDate: this.state.endDate, title: this.state.title };
    this.props.callback(data);
  }

  render() {
    return (
      <div>
        <div className="addCounterForm">
          <Form onSubmit={this.add.bind(this)}>
            <Form.Group>
              <Form.Control
                id="eventNameForm"
                type="text"
                value={this.state.title}
                onChange={this.handleText.bind(this)}
                placeholder="Event name"
              />
            </Form.Group>

            <DatePicker
              id="dateForm"
              placeholderText="Click to select a date"
              selected={this.state.endDate}
              onChange={this.handleChange}
              timeInputLabel="Time:"
              showTimeInput
              minDate={new Date()}
              showDisabledMonthNavigation
              timeIntervals={30}
              isClearable={true}
              withPortal
              timeCaption="Time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <Button id="formButton" type="submit" variant="secondary">
              Create Countdown
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}