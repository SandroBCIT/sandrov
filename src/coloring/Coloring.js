import React from 'react';
import Golf from './svg/Golf.js';
import '../App.css';
//import './index.css';

class Coloring extends React.Component {
    constructor() {
        super();
        this.state = {
//            endpoint: "http://127.0.0.1:4001",
//            color: "black"
            frontDoorColor: "white"
        };
    }

//    send = () => {
//        const socket = socketIOClient(this.state.endpoint); 
//        socket.emit('change color', this.state.color);
//        console.log("send it");
//    }
//
//    setColor = (color) => {
//        this.setState({ color });
//        console.log(color);   
//    }]
    
    frontDoorClick = ()=>{
        this.setState({
            frontDoorColor: "green"
        })
    }


    render() {
        return (
            <div>
                <Golf 
                    frontDoorColor={this.state.frontDoorColor}
                    frontDoorClick={this.frontDoorClick}
                />
            </div>
        )
    }
}

export default Coloring;