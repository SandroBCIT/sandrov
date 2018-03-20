import React from 'react';
import Golf from './svg/Golf';
import '../App.css';
import Swatches from './comp/Swatches';

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
            tailLightsColor: "white"
        };
    }
    
    partClicked(carPart){
        this.setState({
            [carPart.target.value]: "green"
        })
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
    
    ventsClick = ()=>{
        this.setState({
            ventsColor: "green"
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
    
    mirrorClick = ()=>{
        this.setState({
            mirrorColor: "green"
        })
    }
    
    headLightsClick = ()=>{
        this.setState({
            headLightsColor: "green"
        })     
    }
    
    tailLightsClick = ()=>{
        this.setState({
            tailLightsColor: "green"
        })     
    }

    render() {
        return (
            <div id="coloringWrapper">
                <Golf 
                    frontDoorClick={this.partClicked.bind(this, "frontDoorColor")}
                    frontDoorColor={this.state.frontDoorColor}
            
                    mainFrameClick = {this.partClicked.bind(this, "mainFrameColor")}
                    mainFrameColor = {this.state.mainFrameColor}

                    rearDoorClick = {this.partClicked.bind(this, "rearDoorColor")}
                    rearDoorColor = {this.state.rearDoorColor}

                    rearIndicatorClick = {this.partClicked.bind(this, "rearIndicatorColor")}
                    rearIndicatorColor = {this.state.rearIndicatorColor}

                    sideIndicatorClick = {this.partClicked.bind(this, "sideIndicatorColor")}
                    sideIndicatorColor = {this.state.sideIndicatorColor}

                    rearHandleClick = {this.partClicked.bind(this, "rearHandleColor")}
                    rearHandleColor = {this.state.rearHandleColor}

                    frontHandleClick = {this.partClicked.bind(this, "frontHandleColor")}
                    frontHandleColor = {this.state.frontHandleColor}

                    ventsClick = {this.partClicked.bind(this, "ventsColor")}
                    ventsColor = {this.state.ventsColor}

                    rearTireShadowClick = {this.partClicked.bind(this, "rearTireShadowColor")}
                    rearTireShadowColor = {this.state.rearTireShadowColor}

                    rearHubClick = {this.partClicked.bind(this, "rearHubColor")}
                    rearHubColor = {this.state.rearHubColor}

                    rearTireClick = {this.partClicked.bind(this, "rearTireColor")}
                    rearTireColor = {this.state.rearTireColor}

                    frontTireClick = {this.partClicked.bind(this, "frontTireColor")}
                    frontTireColor = {this.state.frontTireColor}

                    frontHubClick = {this.partClicked.bind(this, "frontHubColor")}
                    frontHubColor = {this.state.frontHubColor}

                    rearWindowClick = {this.partClicked.bind(this, "rearWindowColor")}
                    rearWindowColor = {this.state.rearWindowColor}

                    windowTrimClick = {this.partClicked.bind(this, "windowTrimColor")}
                    windowTrimColor = {this.state.windowTrimColor}

                    mirrorClick = {this.partClicked.bind(this, "mirrorColor")}
                    mirrorColor = {this.state.mirrorColor}
            
                    headLightsClick = {this.partClicked.bind(this, "headLightsColor")}
                    headLightsColor = {this.state.headLightsColor}
            
                    tailLightsClick = {this.partClicked.bind(this, "tailLightsColor")}
                    tailLightsColor = {this.state.tailLightsColor}
            
                />
                <div>
                    <Swatches />  
                </div>
            
            </div>
        )
    }
}

export default Coloring;