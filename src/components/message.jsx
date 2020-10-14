import React from 'react';
const Message=({message,reverse})=>{
        let classes = "d-flex ";         
        classes+=reverse;
        return (
          <div className={classes}>
            <div className="p-2 card  m-1" style={{maxWidth: 200}}>                               
            <span className="text-left">{message.message}</span>
            <small className="text-right">03:17 PM</small>
            </div>
          </div>
        );
}
 
export default Message;