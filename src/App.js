import React, { Component } from 'react';
import './App.css';
import sandro from './img/sandro.png';
import dov from './img/dov.png';
import Chat from './chat/Chat';
import Stickers from './stickers/Stickers';
import Drumset from './drumset/Drumset';
import Coloring from './coloring/Coloring';

const STYLES = {
    transition: "all 1.5s ease-out"   
}

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            tab: 1,
            opacity: 0.7,
            opacity2: 0.7,
            translate: '0px',
            translate2: '0px',
            scale: 1,
            scale2: 1,
            infoOpacity: 0,
            infoOpacity2: 0,
            linkOpacity: 0,
            linkOpacity2: 0,
            display: 'block',
            display2: 'block',
            infoDisplay: 'none',
            infoDisplay2: 'none'
        }
    }
    
    leftClick = ()=>{
        this.setState({
            opacity: 0,
            opacity2: 0,
            translate: '-200%',
            scale: 5,
            infoDisplay: 'block'
        });
        setTimeout(()=>{
            this.setState({
                infoOpacity: '1',
                display: 'none',
                display2: 'none'
            }); 
        }, 1500);
        setTimeout(()=>{
            this.setState({
                linkOpacity: '1'
            });   
        }, 2500);
    }
    
    rightClick = ()=>{
        this.setState({
            opacity: 0,
            opacity2: 0,
            translate2: '200%',
            scale2: 5,
            infoDisplay2: 'block'
        });   
        setTimeout(()=>{
            this.setState({
                infoOpacity2: '1',
                display: 'none',
                display2: 'none'
            })    
        }, 1500);
        setTimeout(()=>{
            this.setState({
                linkOpacity2: '1'
            });   
        }, 2500);
    }
     
    openTab = (data) =>{
        this.setState({
            tab: data
        });     
    }
    
    
    render() {
        var comp = null;
        
        if(this.state.tab === 1){
            comp = (
                
                <Drumset />
                
                
                /*
                <div className="App" >
                    
                    <button className="btn" onClick={this.openTab.bind(this, 2)} >Chat</button>
                    <button className="btn" onClick={this.openTab.bind(this, 3)} >Stickers</button>
                    <button className="btn" onClick={this.openTab.bind(this, 4)} >Drum Set</button>
                    <button className="btn" onClick={this.openTab.bind(this, 5)} >Coloring</button>
                
                    <div className="info" style={{transition: "all 1s ease-out", opacity: this.state.infoOpacity, display: this.state.infoDisplay}}>
                        <p>Alessandro</p>
                        <p>Web Development Guru</p>
                        <p id="more1" style={{transition: "all 1s ease-out", opacity: this.state.linkOpacity}}>
                            <a id="link1" href="http://gruni.ca" target="_blank" rel="noopener noreferrer" >learn more</a>
                        </p>
                    </div>                

                    <div className="info" style={{transition: "all 1s ease-out", opacity: this.state.infoOpacity2, display: this.state.infoDisplay2}}>
                        <p>Dov</p>
                        <p>UI/UX Genius</p>
                        <p id="more2" style={{transition: "all 1s ease-out", opacity: this.state.linkOpacity2}}>
                            <a id="link2" href="https://www.linkedin.com/in/dovkushnir/" target="_blank" rel="noopener noreferrer" >learn more</a>
                        </p>
                    </div>

                    <div id="halfsContainer">
                    <div id="leftHalf">
                        <div className="hoverDiv">
                            <img id="img1" src={sandro} alt="Some logo" style={{...STYLES, opacity: this.state.opacity, transform: 'translateX(' + this.state.translate + ') scale(' + this.state.scale + ')', display:this.state.display}} onClick={this.leftClick.bind(this)} />
                        </div>
                    </div>

                    <div id="rightHalf">
                        <div className="hoverDiv">
                            <img id="img2" src={dov} alt="Some logo" style={{...STYLES,opacity: this.state.opacity2, transform: 'translateX(' + this.state.translate2 + ') scale(' + this.state.scale2 + ')', display:this.state.display2}} onClick={this.rightClick.bind(this)} />
                        </div>
                    </div>
                    </div>
                </div>
                */
            );
        }else if(this.state.tab === 2){
            comp = ( 
                    <Chat 
                        goToHome={this.openTab.bind(this, 1)}
                    />
            );   
        }else if(this.state.tab === 3){
            comp = ( 
                    <Stickers 
                        goToHome={this.openTab.bind(this, 1)}
                    />
            );   
        }else if(this.state.tab === 4){
            comp = ( 
                    <Drumset />
            );   
        }else if(this.state.tab === 5){
            comp = ( 
                    <Coloring />
            );   
        }

        return(
            <div>
                {comp}
            </div>
        );

    }
}

export default App;