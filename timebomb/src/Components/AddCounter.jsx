import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../App.css';
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
      endDate: date,
    });
  }

  add() {
    const data = this.state;
    this.props.callback(data);
  }

  render(){
    return(
      <div className="addCounterForm">
        <Form onSubmit={this.add.bind(this)}>
          <Form.Group>
            <Form.Control
              id="eventNameForm"
              type="text"
              value={this.state.title}
              placeholder="Event name"
            />
          </Form.Group>
        </Form>
        <DatePicker
          id="dateForm"
          placeholderText="Click to select a date"
          selected={this.state.endDate}
          onChange={this.handleChange}
          timeInputLabel="Time:"
          showTimeInput
          timeIntervals={30}
          isClearable={true}
          withPortal
          timeCaption="Time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <Button id="formButton" type="submit">Add</Button>
      </div>
    )
  }
  
}