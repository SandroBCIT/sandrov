import React from 'react';
import mySocket from "socket.io-client";
import Golf from './svg/Golf';
import '../App.css';
import Swatches from './comp/Swatches';

class Coloring extends React.Component {
    constructor() {
        super();
        this.state = {
            frontDoorColor: "white",
            mainFrameColor: "white",
            rearDoorColor: "white",
            rearIndicatorColor: "white",
            sideIndicatorColor: "white",
            rearHandleColor: "white",
            frontHandleColor: "white",
            ventsColor: "white",
            rearTireShadowColor: "white",
            rearHubColor: "white",
            rearTireColor: "white",
            frontTireColor: "white",
            frontHubColor: "white",
            rearWindowColor: "white",
            windowTrimColor: "white",
            mirrorColor: "white",
            headLightsColor: "white",
            tailLightsColor: "white",
            
            colorPicked: "#ffffff"
        };
    }
    
    componentDidMount(){
//        this.socket = mySocket("https://herokusandrovserver3.herokuapp.com/"); 
        this.socket = mySocket("http://localhost:10000"); 
        
        this.socket.on("userJoined", (data)=>{
            this.setState({
                allUsers: data   
            })
        })
        
        this.socket.on("playInstrument", (url, instr)=>{
            this.playInstrument(url, instr, "true");
        })
    }
    
    partClicked = (carPart)=>{
        this.setState({
            [carPart]: this.state.colorPicked
        })
    }
    
    colorPicker = (color)=>{
        this.setState({
            colorPicked: color
        }) 
        
        var element = document.getElementById("coloringWrapper");
        switch(color) {
            case "#000000":
                element.className = "";
                element.classList.add("blackBrush");
                break;
            case "#ffffff":
                element.className = "";
                element.classList.add("whiteBrush");
                break;
            case "#ff0000":
                element.className = "";
                element.classList.add("redBrush");
                break;
            case "#ff6c20":
                element.className = "";
                element.classList.add("orangeBrush");
                break;
            case "#fffd07":
                element.className = "";
                element.classList.add("yellowBrush");
                break;
            case "#689a10":
                element.className = "";
                element.classList.add("greenBrush");
                break;
            case "#0036e9":
                element.className = "";
                element.classList.add("blueBrush");
                break;
            case "#9123f3":
                element.className = "";
                element.classList.add("purpleBrush");
                break;
            case "#bfbfbf":
                element.className = "";
                element.classList.add("lightgreyBrush");
                break;
            case "#5f5f5f":
                element.className = "";
                element.classList.add("darkgreyBrush");
                break;
            default:
                document.getElementById("coloringBG").style.cursor = 'url("./svg/brushes/brush_white.png"), auto';   
        }
    }

    render() {
        return (
            <div id="coloringWrapper">
                <Golf 
                    partClicked={this.partClicked}

                    frontDoorColor={this.state.frontDoorColor}
                    mainFrameColor = {this.state.mainFrameColor}
                    rearDoorColor = {this.state.rearDoorColor}
                    rearIndicatorColor = {this.state.rearIndicatorColor}
                    sideIndicatorColor = {this.state.sideIndicatorColor}
                    rearHandleColor = {this.state.rearHandleColor}
                    frontHandleColor = {this.state.frontHandleColor}
                    ventsColor = {this.state.ventsColor}
                    rearTireShadowColor = {this.state.rearTireShadowColor}
                    rearHubColor = {this.state.rearHubColor}
                    rearTireColor = {this.state.rearTireColor}
                    frontTireColor = {this.state.frontTireColor}
                    frontHubColor = {this.state.frontHubColor}
                    rearWindowColor = {this.state.rearWindowColor}
                    windowTrimColor = {this.state.windowTrimColor}
                    mirrorColor = {this.state.mirrorColor}
                    headLightsColor = {this.state.headLightsColor}
                    tailLightsColor = {this.state.tailLightsColor}

                />
                <div>
                    <Swatches
                        colorPicker={this.colorPicker}
                    />  
                </div>
            </div>
        )
    }
}

export default Coloring;