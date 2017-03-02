import React, { Component } from 'react';
import { render } from 'react-dom';
import TimerExample from './TimerExample.js';

class Header extends Component{
    render(){
        return <TimerExample start={new Date('2017','02','02','23','60','60')} />
    }
}

export default Header;