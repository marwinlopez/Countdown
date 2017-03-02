import React from 'react';
import TimerLaunch from './TimerLaunch.js';

const TimerExample = React.createClass({
    getInitialState() {
        return { 
            elapsed: 0
         };
    },

    componentDidMount(){
        this.timer = setInterval(this.tick,100);
    },

    componentWillUnmount(){
        clearInterval(this.timer);
    },

    tick(){
        let difference = (this.props.start.getTime() - new Date().getTime()) / 1000;
        let day = Math.floor(difference / 86400);
        difference = difference - (day * 86400);
        let hour = Math.floor(difference / 3600);
        difference = difference - (hour * 3600);
        let minute = Math.floor(difference / 60);
        difference = difference - (minute * 60);
        let second = Math.floor(difference);
        (day < 10) ? day = "0" + day : day;
        (hour < 10) ? hour = "0" + hour : hour;
        (minute < 10) ? minute = "0" + minute : minute;
        (second < 10) ? second = "0" + second : second;
        this.setState({
            elapsed: difference,
            days: day,
            hours: hour,
            minutes: minute,
            seconds: second,
            initialDate: new Date().toDateString(),
            finalDate: this.props.start.toDateString()
        });
    },
    render(){
        return (
            <section>
                <h1>Fecha Actual: {this.state.initialDate}</h1>
                <TimerLaunch start={this.state.days} modul={"Día : "} />
                <TimerLaunch start={this.state.hours} modul={"Horas : "} />
                <TimerLaunch start={this.state.minutes} modul={"Minutos : "} />
                <TimerLaunch start={this.state.seconds} modul={"Segundos : "} />
                <h1>Fecha Final: {this.state.finalDate}</h1>
            </section>
        );
    }
}); 

export default TimerExample;