import React,{Component} from 'react';
import './App.css';
import MessageBox from './components/messageBox';
import socketIOClient from "socket.io-client";
import Register from './components/register';
import NavBar from './components/navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
const ENDPOINT = "https://dry-peak-91003.herokuapp.com/";  
const socket =  socketIOClient(ENDPOINT);
class App extends Component {
  state={
    messages:[],
    value:"",
    user:"",    
  }
  componentDidMount(){  
    socket.on("FromAPI", data => {      
      this.setState({data});      
    });    
    socket.on('newmsg', (data)=> {
       // you may send responce that i recice the messagea
   });
  }  
  handleChange=({currentTarget})=>{       
    this.setState({value:currentTarget.value});
  }
  handleSend=()=>{
    const {messages} = this.state;
      const msg = {
      id:this.state.messages.length + 1,
      name:this.state.user,
      message:this.state.value,
      time:Date.now()
    }
    messages.push(msg);
    this.setState({messages,value:""});     
    socket.emit('msg',{user:this.state.user,messages: this.state.messages,value:this.state.value});    
  }   
  handleRegister=(props)=>{    
    this.setState({user:this.state.value,value:""});   
    socket.emit('setUsername',this.state.value);
    props.history.push("/chat");        
  }
  render(){
    const {messages,value,user}=this.state;
    return (<React.Fragment>
            <NavBar user={user}/>      
      <div className="container"> 
      <Switch>
        <Route path="/register" render={ props=> <Register  value={value} {...props} handleChange={this.handleChange} handleRegister={this.handleRegister}/>}/>
        <Route path="/chat" render={props=> <MessageBox user={user}   {...props } value={value} messages={messages}  handleChange={this.handleChange}  handleSend={this.handleSend}/>}/>
        <Redirect to="/register"/>
        </Switch>           
        </div>            
      </React.Fragment>
    );
  }
}

export default App;
