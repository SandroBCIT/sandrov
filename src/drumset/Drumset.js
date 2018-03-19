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
        this.socket = mySocket("https://herokusandrovserver3.herokuapp.com/"); 
        
        this.socket.on("userJoined", (data)=>{
            this.setState({
                allUsers: data   
            })
        })
        
        this.socket.on("playInstrument", (url)=>{
            this.playInstrumentSent(url);
        })
    }
    
    joinRoom = (tab, room)=>{
        this.changeTab(tab, "");       
        
        this.socket.emit("joinroom", room);
    }
    
    changeTab = (tab, instr)=>{
        if(tab === 1){
            this.socket.emit("leftRoom");    
        }
        this.setState({
            tab: tab,
            instrChosen: instr
        })
        
    }
    
    playInstrument = (url)=>{
        this.socket.emit("playInstrument", url);
    }
    
    playInstrumentSent = (url)=>{
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
        var usersList = (
            this.state.allUsers.map((obj, i)=>{
                return(
                    <p key={i}>{this.state.allUsers[i]}</p>   
                );   
            })   
        )
        
        var comp = null;
        
        if(this.state.tab === 1){
            comp = (
                <div>
                    <button onClick={this.joinRoom.bind(this, 2, "room1")}>Drum Room 1</button>
                    <button onClick={this.joinRoom.bind(this, 2, "room1")}>Drum Room 2</button>
                    <button onClick={this.joinRoom.bind(this, 2, "room1")}>Drum Room 3</button>
                </div>
            )    
        }else if(this.state.tab === 2){
            comp = (
                <div>
                    <p>Choose Your Instrument</p>
                
                    <button onClick={this.changeTab.bind(this, 1)}>BACK</button>
                
                    <button onClick={this.changeTab.bind(this, 3, "Bass")}>Bass</button>
                    <button onClick={this.changeTab.bind(this, 3, "Snare")}>Snare</button>
                    <button onClick={this.changeTab.bind(this, 3, "HiHat")}>HiHat</button>
                    <button onClick={this.changeTab.bind(this, 3, "CrashSmall")}>Crash Small</button>
                    <button onClick={this.changeTab.bind(this, 3, "CrashLarge")}>Crash Large</button>
                    <button onClick={this.changeTab.bind(this, 3, "Tom1")}>Tom1</button>
                    <button onClick={this.changeTab.bind(this, 3, "Tom2")}>Tom2</button>
                    <button onClick={this.changeTab.bind(this, 3, "Tom3")}>Tom3</button>
                    {usersList}
                </div>
            )            
        }else if(this.state.tab === 3){
            if(this.state.instrChosen === "Bass"){
                comp = (
                    <div>
                        <button onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <button onClick={this.playInstrument.bind(this, "./sounds/Bass.mp3")}>Bass</button>
                        {usersList}
                    </div>
                )
            }else if(this.state.instrChosen === "Snare"){
                comp = (
                    <div>
                        <button onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <button onClick={this.playInstrument.bind(this, "./sounds/Snare.mp3")}>Snare</button>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "HiHat"){
                comp = (
                    <div>
                        <button onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <button onClick={this.playInstrument.bind(this, "./sounds/HiHat.mp3")}>HiHat</button>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "CrashSmall"){
                comp = (
                    <div>
                        <button onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <button onClick={this.playInstrument.bind(this, "./sounds/CrashSmall.mp3")}>Crash Small</button>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "CrashLarge"){
                comp = (
                    <div>
                        <button onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <button onClick={this.playInstrument.bind(this, "./sounds/CrashLarge.mp3")}>Crash Large</button>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "Tom1"){
                comp = (
                    <div>
                        <button onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <button onClick={this.playInstrument.bind(this, "./sounds/Tom1.mp3")}>Tom1</button>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "Tom2"){
                comp = (
                    <div>
                        <button onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <button onClick={this.playInstrument.bind(this, "./sounds/Tom2.mp3")}>Tom2</button>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "Tom3"){
                comp = (
                    <div>
                        <button onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <button onClick={this.playInstrument.bind(this, "./sounds/Tom3.mp3")}>Tom3</button>
                        {usersList}
                    </div>
                )    
            }
        }

        return (
            <div className="App">
                <Sound 
                    url={this.state.playURL}
                    playStatus={this.state.playStatus}
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying} 
                />
                {comp}
            </div>
        );
    }
}

export default Drumset;
