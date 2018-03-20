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
//    black white red yellow blue purple lightGrey darkGrey
    render() {
        return (
            <div id="swatchDiv">
            
                <img src={"../svg/bucket_black.svg"} alt="bucket" className="swatch" onClick={this.colorPicker.bind(this, "#000000")} />

                <button style={{backgroundColor: "#ffffff"}} className="swatch" onClick={this.colorPicker.bind(this, "#ffffff")}></button>
                <br/>
                <button style={{backgroundColor: "#ff0000"}} className="swatch" onClick={this.colorPicker.bind(this, "#ff0000")}></button>
                <button style={{backgroundColor: "#ff6c20"}} className="swatch" onClick={this.colorPicker.bind(this, "#ff6c20")}></button>
                <br/>
                <button style={{backgroundColor: "#fffd07"}} className="swatch" onClick={this.colorPicker.bind(this, "#fffd07")}></button>
                <button style={{backgroundColor: "#689a10"}} className="swatch" onClick={this.colorPicker.bind(this, "#689a10")}></button>
                <br/>
                <button style={{backgroundColor: "#0036e9"}} className="swatch" onClick={this.colorPicker.bind(this, "#0036e9")}></button>
                <button style={{backgroundColor: "#9123f3"}} className="swatch" onClick={this.colorPicker.bind(this, "#9123f3")}></button>
                <br/>
                <button style={{backgroundColor: "#bfbfbf"}} className="swatch" onClick={this.colorPicker.bind(this, "#bfbfbf")}></button>
                <button style={{backgroundColor: "#5f5f5f"}} className="swatch" onClick={this.colorPicker.bind(this, "#5f5f5f")}></button>
            </div>
        )
    }
}

export default Swatches;