import React, { Component } from 'react';
import { render } from 'react-dom';
import Countdown from './Countdown.js';

class Header extends Component{
    render(){
        return <Countdown start={new Date('2017','02','01','22','60','60')} />
    }
}

export default Header;