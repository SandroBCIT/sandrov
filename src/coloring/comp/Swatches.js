import React from 'react';

class Swatches extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    
    return (
      <div id="swatchDiv">
        <button id="black" className="swatch"></button>
        <button id="white" className="swatch"></button>
        <br/>
        <button id="red" className="swatch"></button>
        <button id="orange" className="swatch"></button>
        <br/>
        <button id="yellow" className="swatch"></button>
        <button id="green" className="swatch"></button>
        <br/>
        <button id="blue" className="swatch"></button>
        <button id="purple" className="swatch"></button>
        <br/>
        <button id="lightGrey" className="swatch"></button>
        <button id="darkGrey" className="swatch"></button>
      </div>
    )
  }
}
export default Swatches;