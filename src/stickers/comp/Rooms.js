import React, { Component } from 'react';
import '../../App.css';

class Rooms extends Component {
    
    render() {
        return (
            <div>
                <button className="btn" onClick={this.props.handleDisplay.bind(this, "room1")}>Room 1</button>
                <button className="btn" onClick={this.props.handleDisplay.bind(this, "room2")}>Room 2</button>
            </div>
        );
    }
}

export default Rooms;
