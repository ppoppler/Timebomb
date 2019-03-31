import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
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

    render(){
        return(
            <div className = "addCounterForm">
            <Form>
                <Form.Group>
                <Form.Control id="eventNameForm" type="text" placeholder="Event name"/>
                </Form.Group>
            </Form>
            <DatePicker
                id = "dateForm"
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
            </div>
        )
    }
}