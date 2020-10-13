import React, { Component } from 'react';
import Sender from './sender';
import Receiver from './reciever';
import Send from './send';
 
class MessageBox extends Component {  
  messagesEndRef = React.createRef()    
    componentDidMount() {
      this.scrollToBottom();
    }
  
    componentDidUpdate() {
      this.scrollToBottom();
    }
  
    scrollToBottom() {          
      this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }    
    render() {        
        const {messages,value,handleChange,handleSend,user} = this.props;        
        return (
          <React.Fragment>
          <h1>{user}</h1>    
          <div  className="container overflow-auto">
            {messages.map(message=>
              message.name===user ? <Sender key={message.id} message={message} /> : <Receiver key={message.id} message={message}/>
            )}                         
           <div ref={this.messagesEndRef} />                       
          </div>    
          <Send handleSend={handleSend} handleChange={handleChange} value={value}/>                   
            </React.Fragment>
        );
    }
}
 
export default MessageBox;