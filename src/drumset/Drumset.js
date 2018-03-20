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
            playStatus1: "STOPPED",     
            playStatus2: "STOPPED",     
            playStatus3: "STOPPED",     
            playStatus4: "STOPPED",     
            playStatus5: "STOPPED",     
            playStatus6: "STOPPED",     
            playStatus7: "STOPPED",     
            playStatus8: "STOPPED",      
        }
    }
    
    componentDidMount(){
        this.socket = mySocket("https://herokusandrovserver3.herokuapp.com/"); 
        
        this.socket.on("userJoined", (data)=>{
            this.setState({
                allUsers: data   
            })
        })
        
        this.socket.on("playInstrument", (url, instr)=>{
            this.playInstrument(url, instr, true);
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
    
    playInstrument = (url, instr, localPlay)=>{
        if(instr === 1){
            this.setState({
                playURL: url,
                playStatus1: "STOPPED"
            }, ()=>{
                this.setState({
                    playStatus1: "PLAYING"
                })    
            })     
        }
        if(instr === 2){
            this.setState({
                playURL: url,
                playStatus2: "STOPPED"
            }, ()=>{
                this.setState({
                    playStatus2: "PLAYING"
                })    
            })     
        }
        if(instr === 3){
            this.setState({
                playURL: url,
                playStatus3: "STOPPED"
            }, ()=>{
                this.setState({
                    playStatus3: "PLAYING"
                })    
            })     
        }
        if(instr === 4){
            this.setState({
                playURL: url,
                playStatus4: "STOPPED"
            }, ()=>{
                this.setState({
                    playStatus4: "PLAYING"
                })    
            })     
        }
        if(instr === 5){
            this.setState({
                playURL: url,
                playStatus5: "STOPPED"
            }, ()=>{
                this.setState({
                    playStatus5: "PLAYING"
                })    
            })     
        }
        if(instr === 6){
            this.setState({
                playURL: url,
                playStatus6: "STOPPED"
            }, ()=>{
                this.setState({
                    playStatus6: "PLAYING"
                })    
            })     
        }
        if(instr === 7){
            this.setState({
                playURL: url,
                playStatus7: "STOPPED"
            }, ()=>{
                this.setState({
                    playStatus7: "PLAYING"
                })    
            })     
        }
        if(instr === 8){
            this.setState({
                playURL: url,
                playStatus8: "STOPPED"
            }, ()=>{
                this.setState({
                    playStatus8: "PLAYING"
                })    
            })     
        }
        
        if(localPlay !== true){
            this.socket.emit("playInstrument", url, instr);
        }
    }
    
    handleSongFinishedPlaying = ()=>{
        this.setState({
            playStatus1: "STOPPED",
            playStatus2: "STOPPED",
            playStatus3: "STOPPED",
            playStatus4: "STOPPED",
            playStatus5: "STOPPED",
            playStatus6: "STOPPED",
            playStatus7: "STOPPED",
            playStatus8: "STOPPED"
        })
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
                        <button onClick={this.playInstrument.bind(this, "./sounds/Bass.mp3", 1, false)}>Bass</button>
                        {usersList}
                    </div>
                )
            }else if(this.state.instrChosen === "Snare"){
                comp = (
                    <div>
                        <button onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <button onClick={this.playInstrument.bind(this, "./sounds/Snare.mp3", 2, false)}>Snare</button>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "HiHat"){
                comp = (
                    <div>
                        <button onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <button onClick={this.playInstrument.bind(this, "./sounds/HiHat.mp3", 3, false)}>HiHat</button>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "CrashSmall"){
                comp = (
                    <div>
                        <button onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <button onClick={this.playInstrument.bind(this, "./sounds/CrashSmall.mp3", 4, false)}>Crash Small</button>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "CrashLarge"){
                comp = (
                    <div>
                        <button onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <button onClick={this.playInstrument.bind(this, "./sounds/CrashLarge.mp3", 5, false)}>Crash Large</button>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "Tom1"){
                comp = (
                    <div>
                        <button onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <button onClick={this.playInstrument.bind(this, "./sounds/Tom1.mp3", 6, false)}>Tom1</button>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "Tom2"){
                comp = (
                    <div>
                        <button onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <button onClick={this.playInstrument.bind(this, "./sounds/Tom2.mp3", 7, false)}>Tom2</button>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "Tom3"){
                comp = (
                    <div>
                        <button onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <button onClick={this.playInstrument.bind(this, "./sounds/Tom3.mp3", 8, false)}>Tom3</button>
                        {usersList}
                    </div>
                )    
            }
        }

        return (
            <div className="App">
                <Sound 
                    url={this.state.playURL}
                    playStatus={this.state.playStatus1}
                    onFinishedPlaying={this.handleSongFinishedPlaying} 
                />
                <Sound 
                    url={this.state.playURL}
                    playStatus={this.state.playStatus2}
                    onFinishedPlaying={this.handleSongFinishedPlaying} 
                />
                <Sound 
                    url={this.state.playURL}
                    playStatus={this.state.playStatus3}
                    onFinishedPlaying={this.handleSongFinishedPlaying} 
                />
                <Sound 
                    url={this.state.playURL}
                    playStatus={this.state.playStatus4}
                    onFinishedPlaying={this.handleSongFinishedPlaying} 
                />
                <Sound 
                    url={this.state.playURL}
                    playStatus={this.state.playStatus5}
                    onFinishedPlaying={this.handleSongFinishedPlaying} 
                />
                <Sound 
                    url={this.state.playURL}
                    playStatus={this.state.playStatus6}
                    onFinishedPlaying={this.handleSongFinishedPlaying} 
                />
                <Sound 
                    url={this.state.playURL}
                    playStatus={this.state.playStatus7}
                    onFinishedPlaying={this.handleSongFinishedPlaying} 
                />
                <Sound 
                    url={this.state.playURL}
                    playStatus={this.state.playStatus8}
                    onFinishedPlaying={this.handleSongFinishedPlaying} 
                />
                {comp}
            </div>
        );
    }
}

export default Drumset;
