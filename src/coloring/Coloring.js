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
            tailLightsColor: "white",
            
            selectedColor: "white"
        };
    }
    
    partClicked = (carPart)=>{
        this.setState({
            [carPart]: "green"
        })
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
                        colorPick={this.colorPick}
                    />  
                </div>
            
            </div>
        )
    }
}

export default Coloring;