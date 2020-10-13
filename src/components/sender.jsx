import React from 'react';
const Sender=({message})=>{
         
        return (
          <div className="d-flex flex-row-reverse">
            <div className="p-2 card col-5 m-2">                               
            <h5 className="text-left">{message.message}</h5>
            </div>
          </div>
        );
}
export default Sender;