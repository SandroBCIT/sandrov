import React from 'react';
import Golf from './svg/Golf.js';
import '../App.css';

class Coloring extends React.Component {
    constructor() {
        super();
        this.state = {
            frontDoorColor: "white",
            mainFrameColor: "white",
            frontDoorColor: "white",
            rearDoorColor: "white",
            rearIndicatorColor: "white",
            sideIndicatorColor: "white",
            rearHandleColor: "white",
            frontHandleColor: "white",
            something3Color: "white",
            rearTireShadowColor: "white",
            rearHubColor: "white",
            rearTireColor: "white",
            frontTireColor: "white",
            frontHubColor: "white",
            frontLogoColor: "black",
            rearWindowColor: "white",
            windowTrimColor: "white",
            rearLogoColor: "black"
        };
    }
    
    frontDoorClick = ()=>{
        this.setState({
            frontDoorColor: "green"
        })
    }

    mainFrameClick = ()=>{
        this.setState({
            mainFrameColor: "green"
        })  
    }
    
    frontDoorClick = ()=>{
        this.setState({
            frontDoorColor: "green"
        })
    }
    
    rearDoorClick = ()=>{
        this.setState({
            rearDoorColor: "green"
        })
    }
    
    rearIndicatorClick = ()=>{
        this.setState({
            rearIndicatorColor: "green"
        })
    }
    
    sideIndicatorClick = ()=>{
        this.setState({
            sideIndicatorColor: "green"
        }) 
    }
    
    rearHandleClick = ()=>{
        this.setState({
            rearHandleColor: "green"
        })
    }
    
    frontHandleClick = ()=>{
        this.setState({
            frontHandleColor: "green"
        }) 
    }
    
    something3Click = ()=>{
        this.setState({
            something3Color: "green"
        }) 
    }
    
    rearTireShadowClick = ()=>{
        this.setState({
            rearTireShadowColor: "green"
        })
    }
    
    rearHubClick = ()=>{
        this.setState({
            rearHubColor: "green"
        })
    }
    
    rearTireClick = ()=>{
        this.setState({
            rearTireColor: "green"
        })
    }
    
    frontTireClick = ()=>{
        this.setState({
            frontTireColor: "green"
        })
    }
    
    frontHubClick = ()=>{
        this.setState({
            frontHubColor: "green"
        })
    }
    
    frontLogoClick = ()=>{
        this.setState({
            frontLogoColor: "green"
        })
    }
    
    rearWindowClick = ()=>{
        this.setState({
            rearWindowColor: "green"
        })
    }
    
    windowTrimClick = ()=>{
        this.setState({
            windowTrimColor: "green"
        })
    }
    
    rearLogoClick = ()=>{
        this.setState({
            rearLogoColor: "green"
        }) 
    }

    render() {
        return (
            <div>
                <Golf 
                    frontDoorColor={this.state.frontDoorColor}
                    frontDoorClick={this.frontDoorClick}
            
                    mainFrameClick = {this.mainFrameClick}
                    mainFrameColor = {this.state.mainFrameColor}

                    frontDoorClick = {this.frontDoorClick}
                    frontDoorColor = {this.state.frontDoorColor}

                    rearDoorClick = {this.rearDoorClick}
                    rearDoorColor = {this.state.rearDoorColor}

                    rearIndicatorClick = {this.rearIndicatorClick}
                    rearIndicatorColor = {this.state.rearIndicatorColor}

                    sideIndicatorClick = {this.sideIndicatorClick}
                    sideIndicatorColor = {this.state.sideIndicatorColor}

                    rearHandleClick = {this.rearHandleClick}
                    rearHandleColor = {this.state.rearHandleColor}

                    frontHandleClick = {this.frontHandleClick}
                    frontHandleColor = {this.state.frontHandleColor}

                    something3Click = {this.something3Click}
                    something3Color = {this.state.something3Color}

                    rearTireShadowClick = {this.rearTireShadowClick}
                    rearTireShadowColor = {this.state.rearTireShadowColor}

                    rearHubClick = {this.rearHubClick}
                    rearHubColor = {this.state.rearHubColor}

                    rearTireClick = {this.rearTireClick}
                    rearTireColor = {this.state.rearTireColor}

                    frontTireClick = {this.frontTireClick}
                    frontTireColor = {this.state.frontTireColor}

                    frontHubClick = {this.frontHubClick}
                    frontHubColor = {this.state.frontHubColor}

                    frontLogoClick = {this.frontLogoClick}
                    frontLogoColor = {this.state.frontLogoColor}

                    rearWindowClick = {this.rearWindowClick}
                    rearWindowColor = {this.state.rearWindowColor}

                    windowTrimClick = {this.windowTrimClick}
                    windowTrimColor = {this.state.windowTrimColor}
            
                    rearLogoClick = {this.rearLogoClick}
                    rearLogoColor = {this.state.rearLogoColor}
            
                
                />
            </div>
        )
    }
}

export default Coloring;