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
            playStatus9: "STOPPED",      
        }
    }
    
    componentDidMount(){
//        this.socket = mySocket("https://herokusandrovserver3.herokuapp.com/"); 
        this.socket = mySocket("http://localhost:10000"); 
        
        this.socket.on("userJoined", (data)=>{
            this.setState({
                allUsers: data   
            })
        })
        
        this.socket.on("playInstrument", (url, instr)=>{
            this.playInstrument(url, instr, "true");
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
        if(instr === 9){
            this.setState({
                playURL: url,
                playStatus9: "STOPPED"
            }, ()=>{
                this.setState({
                    playStatus9: "PLAYING"
                })    
            })     
        }
        
        if(localPlay === "false"){
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
            playStatus8: "STOPPED",
            playStatus9: "STOPPED"
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
                    <button className="btn" onClick={this.joinRoom.bind(this, 2, "room1")}>Drum Room 1</button>
                    <button className="btn" onClick={this.joinRoom.bind(this, 2, "room1")}>Drum Room 2</button>
                    <button className="btn" onClick={this.joinRoom.bind(this, 2, "room1")}>Drum Room 3</button>
                </div>
            )    
        }else if(this.state.tab === 2){
            comp = (
                <div>
                    <p style={{color:"white", fontWeight:500, fontSize: "2em"}}>Choose Your Instrument</p>
                
                    <button className="btn" onClick={this.changeTab.bind(this, 1)}>BACK</button><br /><br />
                
                    <button className="btn" onClick={this.changeTab.bind(this, 3, "Bass")}>Bass</button>
                    <button className="btn" onClick={this.changeTab.bind(this, 3, "Snare")}>Snare</button>
                    <button className="btn" onClick={this.changeTab.bind(this, 3, "HiHat")}>HiHat</button>
                    <button className="btn" onClick={this.changeTab.bind(this, 3, "CrashSmall")}>Crash Small</button>
                    <button className="btn" onClick={this.changeTab.bind(this, 3, "CrashLarge")}>Crash Large</button>
                    <button className="btn" onClick={this.changeTab.bind(this, 3, "Tom1")}>Tom1</button>
                    <button className="btn" onClick={this.changeTab.bind(this, 3, "Tom2")}>Tom2</button>
                    <button className="btn" onClick={this.changeTab.bind(this, 3, "Tom3")}>Tom3</button>
                    <button className="btn" onClick={this.changeTab.bind(this, 3, "Ride")}>Ride</button>
                    {usersList}
                </div>
            )            
        }else if(this.state.tab === 3){
            if(this.state.instrChosen === "Bass"){
                comp = (
                    <div>
                        <button className="btn backBtn" onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <img className="instrument"  onClick={this.playInstrument.bind(this, "./sounds/Bass.mp3", 1, "false")} src={require('./img/Bass.png')}/>
                        {usersList}
                    </div>
                )
            }else if(this.state.instrChosen === "Snare"){
                comp = (
                    <div>
                        <button className="btn backBtn" onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <img className="instrument" onClick={this.playInstrument.bind(this, "./sounds/Snare.mp3", 2, "false")} src={require('./img/Snare.png')}/>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "HiHat"){
                comp = (
                    <div>
                        <button className="btn backBtn" onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <img className="instrument"  onClick={this.playInstrument.bind(this, "./sounds/HiHat.mp3", 3, "false")} src={require('./img/HiHat.png')}/>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "CrashSmall"){
                comp = (
                    <div>
                        <button className="btn backBtn" onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <img className="instrument"  onClick={this.playInstrument.bind(this, "./sounds/CrashSmall.mp3", 4, "false")} src={require('./img/CrashSmall.png')}/>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "CrashLarge"){
                comp = (
                    <div>
                        <button className="btn backBtn" onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <img className="instrument"  onClick={this.playInstrument.bind(this, "./sounds/CrashLarge.mp3", 5, "false")} src={require('./img/CrashLarge.png')}/>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "Tom1"){
                comp = (
                    <div>
                        <button className="btn backBtn" onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <img className="instrument"  onClick={this.playInstrument.bind(this, "./sounds/Tom1.mp3", 6, "false")} src={require('./img/Tom1.png')}/>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "Tom2"){
                comp = (
                    <div>
                        <button className="btn backBtn" onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <img className="instrument"  onClick={this.playInstrument.bind(this, "./sounds/Tom2.mp3", 7, "false")} src={require('./img/Tom2.png')}/>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "Tom3"){
                comp = (
                    <div>
                        <button className="btn backBtn" onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <img className="instrument"  onClick={this.playInstrument.bind(this, "./sounds/Tom3.mp3", 8, "false")} src={require('./img/Tom3.png')}/>
                        {usersList}
                    </div>
                )    
            }else if(this.state.instrChosen === "Ride"){
                comp = (
                    <div>
                        <button className="btn backBtn" onClick={this.changeTab.bind(this, 2)}>BACK</button>
                        <img className="instrument"  onClick={this.playInstrument.bind(this, "./sounds/Ride.mp3", 9, "false")} src={require('./img/Ride.png')}/>
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
                <Sound 
                    url={this.state.playURL}
                    playStatus={this.state.playStatus9}
                    onFinishedPlaying={this.handleSongFinishedPlaying} 
                />
            
                <button className="btn backBtn" onClick={this.props.goToHome}>BACK</button>
                {comp}
            </div>
        );
    }
}

export default Drumset;
