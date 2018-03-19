import React, { Component } from 'react';

class DrumRooms extends Component {
    
    render() {
        return (
            <div>
                <button onClick={this.props.handleDisplay.bind(this, "room1")}>Room 1</button>
                <button onClick={this.props.handleDisplay.bind(this, "room2")}>Room 2</button>
            </div>
        );
    }
}

export default DrumRooms;
