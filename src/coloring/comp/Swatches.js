import React from 'react';
import '../../App.css';

class Swatches extends React.Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    colorPicker = (color)=>{
        this.props.colorPicker(color);
    }
    
    render() {
        return (
            <div id="swatchDiv">
                <button style={{backgroundColor: "black"}} className="swatch" onClick={this.colorPicker.bind(this, "black")}></button>
                <button style={{backgroundColor: "white"}} className="swatch" onClick={this.colorPicker.bind(this, "white")}></button>
                <br/>
                <button style={{backgroundColor: "red"}} className="swatch" onClick={this.colorPicker.bind(this, "red")}></button>
                <button style={{backgroundColor: "orange"}} className="swatch" onClick={this.colorPicker.bind(this, "orange")}></button>
                <br/>
                <button style={{backgroundColor: "yellow"}} className="swatch" onClick={this.colorPicker.bind(this, "yellow")}></button>
                <button style={{backgroundColor: "green"}} className="swatch" onClick={this.colorPicker.bind(this, "green")}></button>
                <br/>
                <button style={{backgroundColor: "blue"}} className="swatch" onClick={this.colorPicker.bind(this, "blue")}></button>
                <button style={{backgroundColor: "purple"}} className="swatch" onClick={this.colorPicker.bind(this, "purple")}></button>
                <br/>
                <button style={{backgroundColor: "lightGrey"}} className="swatch" onClick={this.colorPicker.bind(this, "lightGrey")}></button>
                <button style={{backgroundColor: "darkGrey"}} className="swatch" onClick={this.colorPicker.bind(this, "darkGrey")}></button>
            </div>
        )
    }
}

export default Swatches;