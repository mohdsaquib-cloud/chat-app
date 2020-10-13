import React  from 'react';

const Send = ({handleSend,handleChange,...rest}) => {
  return (  
    <div className="input-group mb-3 justify-content-center">
    <input onChange={handleChange} type="text" className="form-control col-6" placeholder="i Love you." {...rest}/>
    <div className="input-group-append">
      <button onClick={handleSend} className="btn btn-primary" id="basic-addon2"> <i className="fa fa-send"/></button>
    </div>
  </div> 
  );
}
 
export default Send;