import React from 'react';


const TickTock = React.createClass({
    render() {
        return (
               <span>{this.props.modul}{this.props.start} </span>
        );
    }
});

export default TickTock;