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
    this.state = {
      endDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      endDate: date
    });
  }

  handleText(text){
    this.setState({title: text})
  }

  add(event) {
    event.preventDefault();
    console.log(this.state.title);
    console.log(this.state.endDate);
    const data = this.state.endDate;
    this.props.callback(data);
  }

  render() {
    return (
      <div className="addCounterForm">
        <Form  onSubmit={this.add}>
          <Form.Group>
            <Form.Control
              id="eventNameForm"
              type="text"
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
