import React from 'react';
const Receiver=({message})=>{         
        return (
          <div className="d-flex">
            <div className="p-2 card col-5 m-2">                               
            <h1 className="text-left">{message.message}</h1>
            </div>
          </div>
        );
}
 
export default Receiver;
