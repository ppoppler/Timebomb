import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  handleChange(date) {
    this.setState({
      endDate: new Date(date)
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
      <div className="addCounterForm">
        <Form onSubmit={this.add.bind(this)}>
          <Form.Group>
            <Form.Control
              id="eventNameForm"
              type="text"
              value = {this.state.title}
              onChange={this.handleText.bind(this)}
              placeholder="Event name"
            />
          </Form.Group>

          <DatePicker
            id="dateForm"
            selected={this.state.endDate}
            onChange={this.handleChange}
            timeInputLabel="Time:"
            showTimeInput
            timeIntervals={30}
            isClearable={true}
            withPortal
            timeCaption="Time"
            placeholderText="Click to select a date"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          <Button id="formButton" type="submit">
            Add
          </Button>
        </Form>
      </div>
    );
  }
}
