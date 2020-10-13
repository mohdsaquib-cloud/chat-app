import React,{Component} from 'react';
import './App.css';
import MessageBox from './components/messageBox';
import socketIOClient from "socket.io-client";
import Register from './components/register';
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
      const {messages} = this.state;
      const msg = {
      id:this.state.messages.length + 1,
      name:data.user,
      message:data.value,
      time:Date.now()
    }
    messages.push(msg);
    this.setState({messages,value:""});
   });
  }  
  handleChange=({currentTarget})=>{       
    this.setState({value:currentTarget.value});
  }
  handleSend=()=>{ 
    socket.emit('msg', {user:this.state.user,messages: this.state.messages,value:this.state.value});    
  }   
  handleRegister=()=>{    
    this.setState({user:this.state.value,value:""});   
    socket.emit('setUsername',this.state.value);        
  }
  render(){
    const {messages,value,user}=this.state;
    return (
      <div className="container">           
      
            {!user && <Register  value={value} handleChange={this.handleChange} handleRegister={this.handleRegister}/>}
            {user && <MessageBox user={user}   value={value} messages={messages}  handleChange={this.handleChange}  handleSend={this.handleSend}/>}           
      </div>
    );
  }
}

export default App;
