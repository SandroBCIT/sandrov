import React, { Component } from 'react';
import mySocket from "socket.io-client";
import Rooms from "./comp/Rooms";
import './App.css';

class Stickers extends Component {
    constructor(props){
        super(props);
        this.state={
            myImg: require("./img/img1.png"),
            myImg2: require("./img/img2.png"), 
            allUsers:[],
            myId: null,
            showDisplay: false,
            stickers: []
        }
        
        this.handleImage = this.handleImage.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
    }
    
    componentDidMount(){
        this.socket = mySocket("https://herokusandrovserver2.herokuapp.com/");
        
        this.socket.on("userjoined", (data)=>{
            this.setState({
                allUsers: data
            }); 
        });
        
        this.socket.on("yourid", (data)=>{
            this.setState({
                myId: data
            });
            
            this.refs.theDisplay.addEventListener("mousemove", (ev)=>{
                if(this.state.myId === null){
                    //FAIL
                    return false;
                }

                this.refs["u"+this.state.myId].style.left = ev.pageX+"px";
                this.refs["u"+this.state.myId].style.top = ev.pageY+"px";


                this.socket.emit("mymove", {
                    x: ev.pageX,
                    y: ev.pageY,
                    id: this.state.myId,
                    src: this.refs["u"+this.state.myId].src
                });
            });
            
            this.refs.theDisplay.addEventListener("click", (ev)=>{
                this.socket.emit("stick", {
                    x: ev.pageX,
                    y: ev.pageY,
                    src: this.refs["u"+this.state.myId].src
                });    
            });
            
        });
        
        this.socket.on("newsticker", (data)=>{
            this.setState({
                stickers: data
            }); 
        });
        
        this.socket.on("newmove", (data)=>{
            this.refs["u"+data.id].style.left = data.x+"px"; 
            this.refs["u"+data.id].style.top = data.y+"px";
            this.refs["u"+data.id].src = data.src;
        });    
    }
    
    handleImage(evt){
        console.log(evt.target.src)
        
        this.refs["u"+this.state.myId].src = evt.target.src;        
    }
    
    handleDisplay(roomString){
        this.setState({
            showDisplay: true
        });
        
        this.socket.emit("joinroom", roomString);
    }
    
    render() {
        
        var allimgs = this.state.allUsers.map((obj, i)=>{
            return(
                <img ref={"u"+obj} className="allImgs" src={this.state.myImg} alt="Img" height={50} key={i} />   
            );
        });
        
        var allStickers = this.state.stickers.map((obj, i)=>{
            var myStyle = {left:obj.x, top:obj.y};
            return(
                <img style={myStyle} ref={"u"+obj} className="allImgs" src={obj.src} alt="Img" height={50} key={i} />
            )    
        });
        
        
        var comp = null;
        
        if(this.state.showDisplay === false){
            comp = (
                <Rooms handleDisplay={this.handleDisplay}/>
            )
        }else{
            comp = (
                <div>
                    <div ref="theDisplay" id="display">
                        {allimgs}
                        {allStickers}
                    </div>
                    <div id="controls">
                        {this.state.myId}
                        <img src={this.state.myImg} alt="Img" height={50} onClick={this.handleImage} />
                        <img src={this.state.myImg2} alt="Img" height={50} onClick={this.handleImage} />
                    </div>  
                </div>
            )
        }
        
        return (
            <div className="App">
                <button className="btn backBtn" onClick={this.props.goToHome}>BACK</button>
                {comp}
            </div>
        );
    }
}

export default Stickers;
