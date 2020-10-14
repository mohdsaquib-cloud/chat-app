import React from 'react';
const Register=(props)=>{         
    const {handleRegister,handleChange,value}=props;
        return (
            <div>
                <input onChange={handleChange} type="text" className="form-control col-6 m-2" placeholder="Enter your Name" value={value}/>  
                <button className="btn btn-primary m-2" onClick={()=>handleRegister(props)}>Register</button>
            </div>  
        );    
}
 
export default Register;