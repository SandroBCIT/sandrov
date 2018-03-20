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
            
                <img src={require("../svg/buckets/bucket_black.svg")} alt="bucket" className="swatch" onClick={this.colorPicker.bind(this, "#000000")} />
                <img src={require("../svg/buckets/bucket_white.svg")} alt="bucket" className="swatch" onClick={this.colorPicker.bind(this, "#ffffff")} />
                <img src={require("../svg/buckets/bucket_red.svg")} alt="bucket" className="swatch" onClick={this.colorPicker.bind(this, "#ff0000")} />
                <img src={require("../svg/buckets/bucket_orange.svg")} alt="bucket" className="swatch" onClick={this.colorPicker.bind(this, "#ff6c20")} />
                <img src={require("../svg/buckets/bucket_yellow.svg")} alt="bucket" className="swatch" onClick={this.colorPicker.bind(this, "#fffd07")} />
                <img src={require("../svg/buckets/bucket_green.svg")} alt="bucket" className="swatch" onClick={this.colorPicker.bind(this, "#689a10")} />
                <img src={require("../svg/buckets/bucket_blue.svg")} alt="bucket" className="swatch" onClick={this.colorPicker.bind(this, "#0036e9")} />
                <img src={require("../svg/buckets/bucket_purple.svg")} alt="bucket" className="swatch" onClick={this.colorPicker.bind(this, "#9123f3")} />
                <img src={require("../svg/buckets/bucket_lightgrey.svg")} alt="bucket" className="swatch" onClick={this.colorPicker.bind(this, "#bfbfbf")} />
                <img src={require("../svg/buckets/bucket_darkgrey.svg")} alt="bucket" className="swatch" onClick={this.colorPicker.bind(this, "#5f5f5f")} />
            </div>
        )
    }
}

export default Swatches;