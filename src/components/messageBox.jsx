import React, { Component } from 'react';
import Message from './message';
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
          <div  className="container overflow-auto">
            {messages.map(message=>
              message.name===user ? <Message key={message.id} message={message} reverse = "flex-row-reverse"/> : <Message key={message.id} message={message}/>
            )}                         
           <div ref={this.messagesEndRef} />                       
          </div>    
          <Send handleSend={handleSend} handleChange={handleChange} value={value}/>                   
            </React.Fragment>
        );
    }
}
 
export default MessageBox;