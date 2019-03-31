import React, {Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import Countdown from './Countdown';

receiveAddCounterCallback(data) {
    console.log(data.title);
    var array = this.state.counter.push(<Countdown title={data.title} endDate={data.endDate} />);
    this.setState({counters: array});
    console.log(this.state.counters);
  }
  
function counters(props){
    const numOfCounters = props.numOfCounters;
    return(
        <div>
            {/* {numOfCounters.length > 2 &&
            } */}
        </div>
    )
}

/**
 * Contains a grid of all the countdown objects
 */
export default class CountdownGrid extends Component{
    render(){
        return(
            <Container>
                <Row>
                <Countdown/>
                </Row>
            </Container>
        );
    }
}