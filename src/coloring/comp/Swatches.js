import React from 'react';
import '../../App.css';

class Swatches extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div id="swatchDiv">
                <button style={{backgroundColor: "black"}} className="swatch"></button>
                <button style={{backgroundColor: "white"}} className="swatch"></button>
                <br/>
                <button style={{backgroundColor: "red"}} className="swatch"></button>
                <button style={{backgroundColor: "orange"}} className="swatch"></button>
                <br/>
                <button style={{backgroundColor: "yellow"}} className="swatch"></button>
                <button style={{backgroundColor: "green"}} className="swatch"></button>
                <br/>
                <button style={{backgroundColor: "blue"}} className="swatch"></button>
                <button style={{backgroundColor: "purple"}} className="swatch"></button>
                <br/>
                <button style={{backgroundColor: "lightGrey"}} className="swatch"></button>
                <button style={{backgroundColor: "darkGrey"}} className="swatch"></button>
            </div>
        )
    }
}

export default Swatches;