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
        const start = this.props.start.getTime();
        const final =new Date().getTime()
        let difference = (start - final) / 1000;
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
            seconds: second
        });
    },
    render(){
        
        if (this.state.days == 0 || 
            this.state.hours == 0 || 
            this.state.minutes == 0 ||
            this.state.seconds == 1){
            return (<section>
                        <TimerLaunch start={this.state.days} modul={"Día : "} />
                        <TimerLaunch start={this.state.hours} modul={"Horas : "} />
                        <TimerLaunch start={this.state.minutes} modul={"Minutos : "} />
                        <TimerLaunch start={this.state.seconds} modul={"Segundos : "} />
                    </section>);
         }else{
             return (
                <h1>Bienvenidos</h1>
             );
         }
    }
}); 

export default TimerExample;