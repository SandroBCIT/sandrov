import React, { Component } from 'react';
import './App.css';
import sandro from './img/sandro.png';
import dov from './img/dov.png';
import bg from './img/bg.png';
import Chat from './chat/Chat';

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
    
    openChat = ()=>{
        this.setState({
            tab: 2
        });  
    }
    
    openSticker = ()=>{
        this.setState({
            tab: 3
        });  
    }
    
    render() {
        if(this.state.tab ==1){
            return (
                <div className="App" >
                    
                    <button onClick={this.openChat} >Chat</button>
                    <button onClick={this.openSticker} >Chat</button>
                
                    <p id="info1" style={{transition: "all 1s ease-out", opacity: this.state.infoOpacity, display: this.state.infoDisplay}}>
                        <p>Alessandro</p>
                        <p>Web Development Guru</p>
                        <p id="more1" style={{transition: "all 1s ease-out", opacity: this.state.linkOpacity}}>
                            <a id="link1" href="http://gruni.ca" target="_blank" >learn more</a>
                        </p>
                    </p>                

                    <p id="info2" style={{transition: "all 1s ease-out", opacity: this.state.infoOpacity2, display: this.state.infoDisplay2}}>
                        <p>Dov</p>
                        <p>UI/UX Genius</p>
                        <p id="more2" style={{transition: "all 1s ease-out", opacity: this.state.linkOpacity2}}>
                            <a id="link2" href="https://www.linkedin.com/in/dovkushnir/" target="_blank" >learn more</a>
                        </p>
                    </p>

                    <div id="leftHalf">
                        <div id="hoverDiv1">
                            <img id="img1" src={sandro} alt="Some logo" style={{...STYLES, opacity: this.state.opacity, transform: 'translateX(' + this.state.translate + ') scale(' + this.state.scale + ')', display:this.state.display}} onClick={this.leftClick.bind(this)} />
                        </div>
                    </div>

                    <div id="rightHalf">
                        <div id="hoverDiv1">
                            <img id="img2" src={dov} alt="Some logo" style={{...STYLES,opacity: this.state.opacity2, transform: 'translateX(' + this.state.translate2 + ') scale(' + this.state.scale2 + ')', display:this.state.display2}} onClick={this.rightClick.bind(this)} />
                        </div>
                    </div>
                </div>
            );
        }else if(this.state.tab == 2){
            return ( 
                <div>
                    <Chat />
                </div>
            );   
        }else if(this.state.tab == 3){
            return ( 
                <div>
                    <Stickers />
                </div>
            );   
        }
        
    }
}

export default App;