import React, { Component } from 'react';
import mySocket from "socket.io-client";
import DrumRooms from "./comp/DrumRooms";
import '../App.css';
import Sound from 'react-sound';

class Drumset extends Component {
    constructor(props){
        super(props);
        this.state={
            tab: 1,
            allUsers: [],
            playURL: "./sounds/Bass.mp3",
            playStatus: "STOPPED",      
        }
    }
    
    componentDidMount(){
        this.socket = mySocket("http://localhost:10000"); 
    }
    
    changeTab = (tab, room)=>{
        this.setState({
            tab: tab
        })
        
        this.socket.emit("joinroom", room);
    }
    
    playInstrument = (url)=>{
        this.setState({
            playURL: url,
            playStatus: "STOPPED"
        }, ()=>{
            this.setState({
                playStatus: "PLAYING"
            })    
        })      
    }
    
    handleSongLoading = ()=>{
    }
    
    handleSongPlaying = ()=>{
    }
    
    handleSongFinishedPlaying = ()=>{
    }
    
    render() {
        var comp = null;
        
        if(this.state.tab == 1){
            comp = (
                <div>
                    <button onClick={this.changeTab.bind(this, 2, "room1")}>Drum Room 1</button>
                    <button onClick={this.changeTab.bind(this, 2, "room1")}>Drum Room 2</button>
                    <button onClick={this.changeTab.bind(this, 2, "room1")}>Drum Room 3</button>
                </div>
            )    
        }else if(this.state.tab == 2){
            comp = (
                <div>
                    <Sound 
                        url={this.state.playURL}
                        playStatus={this.state.playStatus}
                        onLoading={this.handleSongLoading}
                        onPlaying={this.handleSongPlaying}
                        onFinishedPlaying={this.handleSongFinishedPlaying} 
                    />

                    <button onClick={this.playInstrument.bind(this, "./sounds/Bass.mp3")}>Bass</button>
                    <button onClick={this.playInstrument.bind(this, "./sounds/Snare.mp3")}>Snare</button>
                    <button onClick={this.playInstrument.bind(this, "./sounds/HiHat.mp3")}>HiHat</button>
                    <button onClick={this.playInstrument.bind(this, "./sounds/CrashSmall.mp3")}>Crash Sm</button>
                    <button onClick={this.playInstrument.bind(this, "./sounds/CrashLarge.mp3")}>Crash Lg</button>
                    <button onClick={this.playInstrument.bind(this, "./sounds/Tom1.mp3")}>Tom Sm</button>
                    <button onClick={this.playInstrument.bind(this, "./sounds/Tom2.mp3")}>Tom Md</button>
                    <button onClick={this.playInstrument.bind(this, "./sounds/Tom3.mp3")}>Tom Lg</button>
                </div>
            )
        }
        return (
            <div className="App">
                {comp}  
            </div>
        );
    }
}

export default Drumset;
