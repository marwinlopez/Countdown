import React from 'react';
import TimerExample from './TimerExample.js';
import Header from './Header.js';

const App = React.createClass({
    getInitialState(){
        return {
            num: Math.ceil(Math.random() * 100)
        };
    },
    getNumeroAleatorio(){
        this.setState({
            num: Math.ceil(Math.random() * 100)
        });
    },
    render(){
        return(
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.getNumeroAleatorio}>Lanzar</button>
                <TimerExample start={new Date('2018','07','18','07','00','00')} />
            </div>
            
        )
    }
});

export default App;