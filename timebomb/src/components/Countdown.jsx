import React, {Component} from 'react';

/**
 * Returns a single countdown object. The time will be initially set but using state, the countdown time will change
 */
export default class Countdown extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            seconds: '00',
            minutes: '',
            hours: '',
            days: ''
        }
    }

    function() {
        var diff = {
            inDays: function(date1, date2) {
                var t1 = date1.getTime();
                var t2 = date2.getTime();

                return parseInt((t2-t1)/(24*3600*1000))
            },
            inHours: function(date1, date2) {
                var t1 = date1.getTime();
                var t2 = date2.getTime();

                return parseInt((t2-t1)/(3600*1000));
            },
            inMinutes: function(date1, date2) {
                var t1 = date1.getTime();
                var t2 = date2.getTime();

                return parseInt((t2-t1)/(60*1000));
            },
            inSeconds: function(date1, date2) {
                var t1 = date1.getTime();
                var t2 = date2.getTime();

                return parseInt((t2-t1)/(1000));
            }
        }

        function startTime() {
            var now = new Date();
            var h = now.getHours();
            var m = now.getMinutes();
            var s = now.getSeconds();
        }

        function getTimeLeft(Form) {
            var date1 = new Date(Form.props.endDate);
            var date2 = new Date();

            var days = diff.inDays(date1, date2);
            var hours = diff.inHours(date1, date2);
            var minutes = diff.inMinutes(date1, date2);
            var seconds = diff.inSeconds(date1, date2);

            let timeLeft = '';

            if (days > 1) {
                timeLeft = '${days} days | ${hours} hours | ${minutes} minutes | ${seconds} seconds';
            } else if (hours > 1) {
                timeLeft = '${hours} hours | ${minutes} minutes | ${seconds} seconds';
            } else if (minutes > 1) {
                timeLeft = '${minutes} minutes | ${seconds} seconds';
            } else {
                timeLeft = '${seconds} seconds';
            }

            // if (d1 < d2) {
            //     //countdown over
            // }
        }
    }
    

    render(){
        return(
            <div>
                <p>Title: {this.props.title}</p>
            </div>
        )
    }
}